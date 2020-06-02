<?php
// define variables and set to empty values
$yc1 = $y1e1 = $y1e2 = $y1cc = $y1rh =
$yc2 = $y2e1 = $y2e2 = $y2cc = $y2rh =
$pc2 = $p2e1 = $p2e2 = $p2cc = $p2rh = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $yc1 = test_input($_POST["yc1"]);
  $y1e1 = test_input($_POST["y1e1"]);
  $y1e2 = test_input($_POST["y1e2"]);
  $y1cc = test_input($_POST["y1cc"]);
  $y1rh = test_input($_POST["y1rh"]);

  $yc2 = test_input($_POST["yc2"]);
  $y2e1 = test_input($_POST["y2e1"]);
  $y2e2 = test_input($_POST["y2e2"]);
  $y2cc = test_input($_POST["y2cc"]);
  $y2rh = test_input($_POST["y2rh"]);

  $pc1 = test_input($_POST["pc1"]);
  $p1e1 = test_input($_POST["p1e1"]);
  $p1e2 = test_input($_POST["p1e2"]);
  $p1cc = test_input($_POST["p1cc"]);
  $p1rh = test_input($_POST["p1rh"]);

  $pc1 = test_input($_POST["pc2"]);
  $p1e1 = test_input($_POST["p2e1"]);
  $p1e2 = test_input($_POST["p2e2"]);
  $p1cc = test_input($_POST["p2cc"]);
  $p1rh = test_input($_POST["p2rh"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Ahoy! Shipmate Board</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/board.css"/>
    <link rel="stylesheet" href="https://use.typekit.net/zga1hzm.css">
    <script type="text/javascript" src="JS/board.js"></script>
  </head>


  <body id="container">
    <aside id="aside">
        <h1>Ahoy!</h1>
    </aside>

    <header id="header">
        <div id="header-content">
            <div id="divbtn">
                <button onclick="document.location = 'directions.html'" id="directions" >Directions</button>
                <button onclick="document.location = 'islander_board.html'" id="view">Islander View</button>
            </div>
            <div id="icon-header">
                <p id="turn-text">YELLOW's Turn</p>
                <img id="boat" src="../1x/asset1.png">
            </div>
          </div>
    </header>

    <main>
        <article id="board">
            <section class="info-card">
                  <div  class="yellow" id="card1">
                      <p><?php echo $_POST["y1e1"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="yellow" id="card2">
                      <p><?php echo $_POST["y1e2"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="yellow" id="card3">
                      <p><?php echo $_POST["y2e1"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="yellow" id="card4">
                      <p><?php echo $_POST["y2e2"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="purple" id="card5">
                      <p><?php echo $_POST["p1e1"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="purple" id="card6">
                      <p><?php echo $_POST["p1e2"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="purple" id="card7">
                      <p><?php echo $_POST["p2e1"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="purple" id="card8">
                      <p><?php echo $_POST["p2e2"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="red" id="card9">
                      <p><?php echo $_POST["y1rh"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="red" id="card10">
                      <p><?php echo $_POST["y2rh"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="red" id="card11">
                      <p><?php echo $_POST["p1rh"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="red" id="card12">
                      <p><?php echo $_POST["p2rh"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="ccyellow" id="card13">
                      <p><?php echo $_POST["y1cc"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="ccyellow" id="card14">
                      <p><?php echo $_POST["y2cc"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="ccpurple" id="card15">
                      <p><?php echo $_POST["p1cc"]; ?></p>
                  </div>
            </section>
            <section class="info-card">
                  <div class="ccpurple" id="card16">
                      <p><?php echo $_POST["p2cc"]; ?></p>
                  </div>
            </section>
        </article>
    </main>
  </body>
</html>
