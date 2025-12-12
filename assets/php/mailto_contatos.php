<?php

  // mostrar erro
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

 $destinatario = "assessoriaplanoh@gmail.com";

 //Variáveis
  $vnome = utf8_decode($_POST [ 'nome' ]);
  $vemail = utf8_decode($_POST [ 'email' ]);
  $vtel = utf8_decode($_POST [ 'numero' ]);
  $vtitulo = utf8_decode($_POST [ 'titulo' ]);
  $vmensagem = utf8_decode($_POST [ 'mensagem' ]);


  // mensagem escrita
    $body = " 
    <html>
      <p><b>Nome: </b>$vnome</p>
      <p><b>E-mail: </b>$vemail</p>
      <p><b>Tel: </b>$vtel</p>
      <p><b>Titulo do email: </b>$vtitulo</p>
      <p><b>Mensagem: </b>$vmensagem</p> 
    </html>
  "; 

  // envia o email
if(mail($destinatario, $vtitulo , $body, "From: $vemail\r\n"))

{
 echo "<meta http-equiv='refresh' content='1;URL=../../informacoes_enviadas_com_sucesso.html'>";
      
} 
 else
 {
 echo "<meta http-equiv='refresh' content='1;URL=../../erro_form.html'>";
}
?>

