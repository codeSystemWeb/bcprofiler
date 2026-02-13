<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Anti-spam honeypot
    if (!empty($_POST['empresa'])) {
        header("Location: index.html?status=erro");
        exit;
    }

    $nome = strip_tags(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefone = strip_tags(trim($_POST["telefone"]));
    $mensagem = strip_tags(trim($_POST["mensagem"]));

    // Validação
    if (empty($nome) || empty($mensagem) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?status=erro");
        exit;
    }

    $destinatario = "wagnergeroldi@gmaiil.com"; // <-- ALTERAR
    $assunto = "Novo contato pelo site BC Profiler";

    $conteudo = "Nome: $nome\n";
    $conteudo .= "Email: $email\n";
    $conteudo .= "Telefone: $telefone\n\n";
    $conteudo .= "Mensagem:\n$mensagem\n";

    $headers = "From: BC Profiler <no-reply@bcprofiler.com>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($destinatario, $assunto, $conteudo, $headers)) {
        header("Location: index.html?status=sucesso");
    } else {
        header("Location: index.html?status=erro");
    }

} else {
    header("Location: index.html");
}