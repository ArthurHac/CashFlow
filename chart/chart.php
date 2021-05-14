<?php

$pdo = new PDO('mysql: host=localhost;dbname=chart-teste;port=3306;charset=utf8', 'root', '');

$sql = "SELECT mes.mes, vendas.vendas FROM vendas JOIN mes ON mes.id_mes = vendas.id_meses;";

$statement = $pdo->prepare($sql);

$statement->execute();

while($results = $statement->fetch(PDO: : FETCH_ASSOC)){
    $result = $results;
}


echo json_encode($result);

?>