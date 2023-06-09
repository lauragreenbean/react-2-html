import React from 'react';


class About extends React.Component {
  render() {
    return (
        <main>
        <body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col w-3">
                        <div class="logo">
                            <a href="/"><img src="https://thedevdrawer.com/assets/img/logo-header.png" alt= " "/></a>
                        </div>
                    </div>
                    <div class="col w-9">
                        <div id="menu">
                            <button type="button" id="menu-btn">Menu</button>
                        </div>
                        <nav id="nav">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about.html" class="active">About</a></li>
                                <li><a href="/contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col w-1">
                        <div class="card">
                            <h1 class="text-center">About Me</h1>
                            <div class="row">
                                <div class="col w-3 left">
                                    <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt= " "/>
                                </div>
                                <div class="col w-9">
                                    <h2>Quid enim de amicitia statueris utilitatis causa expetenda vides.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scisse enim te quis coarguere possit? Equidem, sed audistine modo de Carneade? Quid ad utilitatem tantae pecuniae? Duo Reges: constructio interrete. Restinguet citius, si ardentem acceperit. Quae sequuntur igitur? </p>
                                    <p>Quis istud possit, inquit, negare? <i>Bonum integritas corporis: misera debilitas.</i> Immo alio genere; <i>Et ille ridens: Video, inquit, quid agas;</i> Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Numquam facies. </p>
                                    <h3>Verum hoc loco sumo verbis his eandem certe vim voluptatis Epicurum nosse quam ceteros.</h3>
                                    <p>Tamen a proposito, inquam, aberramus. Quid, si etiam iucunda memoria est praeteritorum malorum? Estne, quaeso, inquam, sitienti in bibendo voluptas? </p>
                                    <p>Multoque hoc melius nos veriusque quam Stoici. Hoc Hieronymus summum bonum esse dixit. <b>At iam decimum annum in spelunca iacet.</b> Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Cur post Tarentum ad Archytam? </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="container">
                <p class="text-center hidden-sm">
                    <a href="/index.html" class="active">Home</a> | <a href="/about.html">About</a> | <a href="/contact.html">Contact</a>
                </p>
                <p class="text-center">
                    Fake Copyright 2021 &copy; The Dev Drawer
                </p>
            </div>
        </footer>
        <script src="js/init.js"></script>
    </body>
    </main>
    );
  }
}
export default About;