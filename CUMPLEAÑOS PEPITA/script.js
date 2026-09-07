/* ============================================
   🌹 100 ROSAS — SCRIPT CORREGIDO
   Sin galería, sin audio local, con enlace a Spotify
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Función auxiliar para forzar visibilidad de todos los elementos con fade-in/up
    function hacerTodoVisible() {
        document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.classList.add('visible');
        });
    }
    // Ejecutar inmediatamente y al cargar
    hacerTodoVisible();
    window.addEventListener('load', hacerTodoVisible);

    // ============================================
    // 1. DATOS: 100 ROSAS
    // ============================================
    const rosasData = [
        { numero: 1, texto: "La primera vez que te vi." },
        { numero: 2, texto: "La primera vez que me hiciste reír de verdad." },
        { numero: 3, texto: "Ese día que nos quedamos hablando hasta tarde sin darnos cuenta." },
        { numero: 4, texto: "Una de las cosas que más admiro de ti (Tu Gran amor a mi)." },
        { numero: 5, texto: "Tu sonrisa cuando intentas no reírte." },
        { numero: 6, texto: "Cómo cambias tu voz cuando estás emocionada." },
        { numero: 7, texto: "Que puedo ser yo mismo contigo." },
        { numero: 8, texto: "Cómo me miras cuando estamos hablando." },
        { numero: 9, texto: "Que haces especiales cosas que parecen pequeñas." },
        { numero: 10, texto: "Nuestro primer abrazo." },
        { numero: 11, texto: "Aquella noche que nos quedamos viendo las estrellas en el parque." },
        { numero: 12, texto: "Tu forma de abrazarme cuando estoy cansado." },
        { numero: 13, texto: "Que siempre encuentras el lado positivo." },
        { numero: 14, texto: "El primer trip que hicimos juntos." },
        { numero: 15, texto: "Tu risa cuando algo te hace mucha gracia." },
        { numero: 16, texto: "Cómo me escuchas sin juzgarme (aveces)." },
        { numero: 17, texto: "Que me entiendes con solo mirarme." },
        { numero: 18, texto: "El día que cocinamos juntos por primera vez." },
        { numero: 19, texto: "Tu paciencia cuando me pongo necio." },
        { numero: 20, texto: "La forma en que dices mi apodo." },
        { numero: 21, texto: "Cuando me tomas de la mano en la calle." },
        { numero: 22, texto: "Ese gesto que tienes al despertar (cuando pareces foca recien comida)." },
        { numero: 23, texto: "Que siempre me apoyas en mis proyectos." },
        { numero: 24, texto: "El día que te presenté a mi familia." },
        { numero: 25, texto: "Tu emoción al planear futuros viajes." },
        { numero: 26, texto: "Cómo me calmas cuando estoy estresado." },
        { numero: 27, texto: "Que bailamos en la cocina sin música todo random." },
        { numero: 28, texto: "Aquella vez que nos vimos por primera vez." },
        { numero: 29, texto: "Tu ternura con los animales." },
        { numero: 30, texto: "Que me haces querer ser mejor persona." },
        { numero: 31, texto: "El día que vimos nuestra primera película juntos." },
        { numero: 32, texto: "Cómo me sorprendes con pequeños detalles." },
        { numero: 33, texto: "Que respetas mis silencios (aveces)." },
        { numero: 34, texto: "Nuestro primer beso." },
        { numero: 35, texto: "La manera en que te emocionas con una buena noticia." },
        { numero: 36, texto: "Que compartimos sueños parecidos." },
        { numero: 37, texto: "El momento en que me dijiste que me amabas." },
        { numero: 38, texto: "Tu capacidad de perdonar." },
        { numero: 39, texto: "Que te gusta estar conmigo sin hacer nada." },
        { numero: 40, texto: "Aquella tarde lluviosa que pasamos juntos." },
        { numero: 41, texto: "Cómo me defiendes ante cualquiera." },
        { numero: 42, texto: "Tu inteligencia y tu curiosidad." },
        { numero: 43, texto: "Que me cocinas mi platillo favorito (cuando no estoy a dieta)." },
        { numero: 44, texto: "El día que adoptamos una hija juntos (moley)." },
        { numero: 45, texto: "Tu aroma cuando me abrazas." },
        { numero: 46, texto: "Que hacemos un gran equipo." },
        { numero: 47, texto: "Cómo celebras mis logros." },
        { numero: 48, texto: "Nuestro primer aniversario." },
        { numero: 49, texto: "Que me dejas espacio cuando lo necesito." },
        { numero: 50, texto: "Tu valentía para enfrentar los problemas." },
        { numero: 51, texto: "El día que me cuidaste cuando estuve enfermo." },
        { numero: 52, texto: "Que compartes tus sueños conmigo." },
        { numero: 53, texto: "Tu sonrisa al recibir flores." },
        { numero: 54, texto: "Cómo me miras cuando crees que no te veo." },
        { numero: 55, texto: "Que me haces reír incluso en días grises." },
        { numero: 56, texto: "El viaje a la playa que tanto planeamos." },
        { numero: 57, texto: "Tu honestidad, aunque duela." },
        { numero: 58, texto: "Que me enseñas cosas nuevas." },
        { numero: 59, texto: "La noche que hablamos de nuestro futuro." },
        { numero: 60, texto: "Que te preocupas por mi bienestar." },
        { numero: 61, texto: "Nuestra primera pelea y cómo la superamos." },
        { numero: 62, texto: "Tu sentido del humor." },
        { numero: 63, texto: "Que me abrazas por la espalda." },
        { numero: 64, texto: "El día que conocimos un lugar nuevo." },
        { numero: 65, texto: "Tu forma de pedir perdón." },
        { numero: 66, texto: "Que siempre quieres aprender." },
        { numero: 67, texto: "La manera en que me presentas a tus amigos." },
        { numero: 68, texto: "Que me incluyes en tus planes." },
        { numero: 69, texto: "Aquella vez que bailamos por primera vez." },
        { numero: 70, texto: "Tu lealtad inquebrantable." },
        { numero: 71, texto: "El día que me diste una sorpresa inolvidable." },
        { numero: 72, texto: "Cómo me apoyas en mis locuras." },
        { numero: 73, texto: "Que confías en mí." },
        { numero: 74, texto: "Nuestra foto favorita juntos." },
        { numero: 75, texto: "Tu emoción al contarme tu día." },
        { numero: 76, texto: "Que me haces sentir seguro." },
        { numero: 77, texto: "El momento en que decidimos ser novios." },
        { numero: 78, texto: "Tu resiliencia ante las dificultades." },
        { numero: 79, texto: "Que te gusta mi sentido del humor." },
        { numero: 80, texto: "La noche que comimos un pollo enterp." },
        { numero: 81, texto: "Tu bondad con los demás." },
        { numero: 82, texto: "Que te acuerdas de pequeños detalles." },
        { numero: 83, texto: "El día que me acompañaste a mi primera competencia." },
        { numero: 84, texto: "Cómo me tomas del brazo al caminar." },
        { numero: 85, texto: "Que hacemos planes a futuro con ilusión." },
        { numero: 86, texto: "Nuestra canción favorita (Que se mueran)." },
        { numero: 87, texto: "Tu capacidad de escuchar sin interrumpir (aveces)." },
        { numero: 88, texto: "Que me aceptas tal como soy." },
        { numero: 89, texto: "El día que nos reímos hasta llorar." },
        { numero: 90, texto: "Tu pasión por lo que amas." },
        { numero: 91, texto: "Que me cuidas sin que te lo pida." },
        { numero: 92, texto: "La manera en que me miras cuando bailamos." },
        { numero: 93, texto: "Nuestro lugar secreto." },
        { numero: 94, texto: "Que siempre tienes una palabra de aliento." },
        { numero: 95, texto: "El día que hicimos una videollamada de horas." },
        { numero: 96, texto: "Tu forma de celebrar la vida." },
        { numero: 97, texto: "Que eres mi hogar." },
        { numero: 98, texto: "La primera vez que dijiste 'te quiero'." },
        { numero: 99, texto: "Todo lo que hemos construido juntos." },
        { numero: 100, texto: "Esta rosa no representa un recuerdo.\n\nRepresenta todos los momentos que todavía nos faltan vivir.\n\n❤️" }
    ];

    // ============================================
    // 2. DATOS: 100 COSAS QUE AMO DE TI
    // ============================================
    const cosasData = [

        "Tu sonrisa, especialmente cuando intentas esconderla.",
        "Tus ojos y la forma en que pueden decirme tantas cosas sin hablar.",
        "Tu mirada cuando me miras fijamente.",
        "Tu cabello negro, tan tuyo y tan bonito.",
        "La forma en que se ve tu cabello cuando lo llevas suelto.",
        "Cómo se te ve el cabello cuando el viento lo mueve.",
        "Tu carita bonita.",
        "Tus labios.",
        "La forma de tus labios cuando sonríes.",
        "Tu nariz, que me parece preciosa porque es parte de ti.",
        "Tus mejillas cuando sonríes.",
        "La expresión que haces cuando algo te da vergüenza.",
        "Tu mirada cuando estás seria.",
        "Tu mirada cuando estás feliz.",
        "La forma en que tus ojos cambian cuando te emocionas.",
        "Tus pestañas.",
        "Tus cejas y esa expresión tan tuya que haces con ellas.",
        "Tu sonrisa de lado.",
        "Cuando te ríes y ya no puedes parar.",
        "Tu risa cuando algo realmente te causa gracia.",
        "La forma en que muerdes tus labios sin darte cuenta.",
        "Cómo te ves recién despierta.",
        "Tu cara cuando todavía tienes sueño.",
        "Cómo te ves cuando estás despeinada.",
        "Que incluso despeinada me sigues pareciendo hermosa.",
        "Tu cuello.",
        "La delicadeza de tus manos.",
        "Tus dedos entrelazados con los míos.",
        "La forma en que tus manos buscan las mías.",
        "Tus brazos cuando me abrazas.",
        "La sensación de tenerte cerca.",
        "La forma en que encajas en mis brazos.",
        "Tu cintura.",
        "La forma de tu cuerpo.",
        "Tu figura tan bonita.",
        "Tus curvas.",
        "Tu pancita, porque también es parte de ti y me encanta.",
        "La forma en que se te ve la ropa.",
        "Cómo puedes verte hermosa con algo elegante o con algo completamente sencillo.",
        "Tu manera de caminar.",
        "La forma en que mueves el cabello cuando caminas.",
        "Tus piernas.",
        "La forma en que te ves cuando estás sentada a mi lado.",
        "Cómo te ves cuando estás concentrada en algo.",
        "Cómo te ves cuando estás distraída.",
        "Tu perfil.",
        "La forma de tu rostro de lado.",
        "Tu expresión cuando estás pensando.",
        "Tu cara cuando estás intentando no reírte.",
        "La pequeña sonrisa que aparece cuando sabes que tienes razón.",
        "Cómo te ves cuando estás arreglada para salir.",
        "Cómo te ves cuando no llevas maquillaje.",
        "Que no necesitas maquillarte para verme completamente enamorado de ti.",
        "Tu belleza cuando estás completamente natural.",
        "La forma en que un simple detalle puede hacerte ver todavía más bonita.",
        "Tu perfume.",
        "Ese olor que hace que te reconozca incluso antes de verte.",
        "Cómo queda tu perfume cuando me abrazas.",
        "La suavidad de tu piel.",
        "La sensación de acariciarte el cabello.",
        "La forma en que te acercas cuando quieres un abrazo.",
        "Cómo apoyas tu cabeza sobre mí.",
        "La manera en que me abrazas cuando nos despedimos.",
        "La forma en que me abrazas cuando me vuelves a ver.",
        "Tus pequeños gestos cuando estás nerviosa.",
        "La expresión de tu cara cuando algo te sorprende.",
        "Cómo cambias completamente tu expresión cuando estás emocionada.",
        "Tu voz.",
        "Tu voz cuando estás recién despierta.",
        "Tu voz cuando estás feliz.",
        "Tu voz cuando me dices mi nombre.",
        "La manera en que pronuncias algunas palabras.",
        "Tu risa cuando intentas hablar mientras te estás riendo.",
        "La forma en que me miras cuando sabes que estoy mirándote.",
        "Cuando nuestras miradas se encuentran desde lejos.",
        "Ese momento en que me miras y sonríes sin decir nada.",
        "La forma en que inclinas la cabeza cuando me escuchas.",
        "Cuando juegas con tu cabello.",
        "Cuando te arreglas el cabello sin darte cuenta.",
        "Cuando te recoges el cabello y después lo vuelves a soltar.",
        "Cómo se ve tu cabello negro junto a tu sonrisa.",
        "La combinación de tu mirada y tu sonrisa.",
        "La forma en que tus ojos brillan cuando estás feliz.",
        "Tu cara cuando estás emocionada por algo que te gusta.",
        "Cómo te ves cuando estás disfrutando de una comida.",
        "Tu expresión cuando algo te parece demasiado gracioso.",
        "Cuando intentas ponerte seria y no puedes.",
        "Cuando haces pucheros.",
        "Tu lado coqueto.",
        "La manera en que puedes hacerme perder la concentración solamente con mirarme.",
        "Cómo puedes hacer que me quede mirándote sin darme cuenta.",
        "La forma en que todavía me pareces preciosa después de cuatro años.",
        "Que sigo encontrando nuevos detalles de ti que me encantan.",
        "Que todavía me pongo nervioso cuando te veo especialmente bonita.",
        "Que puedo reconocer tu silueta entre muchas personas.",
        "Que tu belleza no depende de cómo estés vestida.",
        "Que para mí eres hermosa incluso en tus días más sencillos.",
        "Tu lado femenino y delicado.",
        "La manera en que tu belleza se mezcla con tu personalidad.",
        "Que eres esa clase de mujer que puedo mirar durante mucho tiempo y seguir pensando lo mismo:",
        "Eres hermosa.",
        "Eres guapa.",
        "Eres preciosa.",
        "Y después de cuatro años, sigues siendo mi mujer bonita.",
    ];

    // ============================================
    // 3. GENERACIÓN DINÁMICA DEL GRID DE ROSAS
    // ============================================
    const rosasGrid = document.getElementById('rosas-grid');
    const contadorRosas = document.getElementById('contador-rosas');

    let rosasVisitadas = new Set();
    const visitadasGuardadas = localStorage.getItem('rosasVisitadas');
    if (visitadasGuardadas) {
        rosasVisitadas = new Set(JSON.parse(visitasGuardadas));
    }

    function actualizarContador() {
        if (contadorRosas) {
            const total = rosasData.length;
            const visitadas = rosasVisitadas.size;
            contadorRosas.textContent = `${visitadas}/${total} rosas visitadas`;
        }
    }

    if (rosasGrid) {
        rosasData.forEach(rosa => {
            const btn = document.createElement('button');
            btn.className = 'rosa-btn';
            btn.textContent = rosa.numero;
            btn.setAttribute('data-numero', rosa.numero);
            btn.setAttribute('aria-label', `Abrir rosa número ${rosa.numero}`);
            if (rosasVisitadas.has(rosa.numero)) {
                btn.classList.add('visitada');
            }
            btn.addEventListener('click', () => abrirRosa(rosa.numero));
            rosasGrid.appendChild(btn);
        });
        actualizarContador();
    }

    // ============================================
    // 4. GENERACIÓN DINÁMICA DE LAS 100 COSAS
    // ============================================
    const cosasGrid = document.getElementById('cosas-grid');

    if (cosasGrid) {
        cosasData.forEach((texto, index) => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'cosa-tarjeta';
            tarjeta.textContent = texto;
            tarjeta.style.transitionDelay = `${Math.min(index * 50, 500)}ms`;
            tarjeta.classList.add('fade-in');
            cosasGrid.appendChild(tarjeta);
        });
        // Hacer visibles las tarjetas recién creadas
        hacerTodoVisible();
    }

    // ============================================
    // 5. MODAL DE ROSAS
    // ============================================
    const modalRosa = document.getElementById('modal-rosa');

    function abrirRosa(numero) {
        const rosa = rosasData.find(r => r.numero === numero);
        if (!rosa || !modalRosa) return;

        rosasVisitadas.add(numero);
        localStorage.setItem('rosasVisitadas', JSON.stringify([...rosasVisitadas]));

        const btn = document.querySelector(`.rosa-btn[data-numero="${numero}"]`);
        if (btn) btn.classList.add('visitada');
        actualizarContador();

        modalRosa.innerHTML = `
            <div class="modal-contenido">
                <button class="modal-cerrar" aria-label="Cerrar">&times;</button>
                <div class="modal-numero">Rosa #${rosa.numero}</div>
                <p class="modal-texto">${rosa.texto.replace(/\n/g, '<br>')}</p>
                <button class="modal-cerrar-btn">Cerrar</button>
            </div>
        `;

        modalRosa.classList.add('abierto');
        document.body.style.overflow = 'hidden';

        modalRosa.querySelector('.modal-cerrar').addEventListener('click', cerrarModal);
        modalRosa.querySelector('.modal-cerrar-btn').addEventListener('click', cerrarModal);
        modalRosa.addEventListener('click', function (e) {
            if (e.target === modalRosa) cerrarModal();
        });
    }

    function cerrarModal() {
        if (modalRosa) {
            modalRosa.classList.remove('abierto');
            document.body.style.overflow = '';
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalRosa && modalRosa.classList.contains('abierto')) {
            cerrarModal();
        }
    });

    // ============================================
    // 6. INTERSECTION OBSERVER PARA ANIMACIONES
    // ============================================
    const elementosAnimados = document.querySelectorAll('.fade-in, .fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    elementosAnimados.forEach(el => observer.observe(el));

    function observarNuevosElementos() {
        const nuevos = document.querySelectorAll('.fade-in:not(.visible), .fade-in-up:not(.visible)');
        nuevos.forEach(el => observer.observe(el));
    }

    // ============================================
    // 7. ANIMACIÓN DE PÉTALOS
    // ============================================
    function crearPetalos() {
        const cantidad = 20;
        for (let i = 0; i < cantidad; i++) {
            const petalo = document.createElement('div');
            petalo.className = 'petalo';
            petalo.style.left = Math.random() * 100 + 'vw';
            const tamano = Math.random() * 15 + 15;
            petalo.style.width = tamano + 'px';
            petalo.style.height = tamano * 0.8 + 'px';
            const duracion = Math.random() * 1 + 4;
            petalo.style.animationDuration = duracion + 's';
            petalo.style.animationDelay = Math.random() * 0.5 + 's';
            petalo.style.opacity = Math.random() * 0.5 + 0.3;
            petalo.style.transform = `rotate(${Math.random() * 360}deg)`;
            const colores = ['#6B1F2A', '#C9A96E', '#B03A48', '#4A1520'];
            petalo.style.background = colores[Math.floor(Math.random() * colores.length)];
            document.body.appendChild(petalo);
            petalo.addEventListener('animationend', () => {
                petalo.remove();
            });
        }
    }

    // ============================================
    // 8. SCROLL SUAVE PARA BOTONES CON data-target
    // ============================================
    document.querySelectorAll('[data-target]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (targetId === '#antes') {
                    crearPetalos();
                }
            }
        });
    });

    // ============================================
    // 9. REVELAR SECCIÓN FINAL
    // ============================================
    const btnAbrirFinal = document.getElementById('btn-abrir-final');
    const seccionProximo = document.getElementById('proximo-capitulo');

    if (btnAbrirFinal && seccionProximo) {
        btnAbrirFinal.addEventListener('click', () => {
            seccionProximo.hidden = false;
            seccionProximo.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('visible');
            });
            seccionProximo.scrollIntoView({ behavior: 'smooth', block: 'start' });
            hacerTodoVisible();
        });
    }

    // ============================================
    // 10. CHECKBOXES INTERACTIVOS (localStorage)
    // ============================================
    const checkboxes = document.querySelectorAll('.check-proximo');
    const STORAGE_KEY = 'checkboxesProximoCapitulo';

    const estadosGuardados = localStorage.getItem(STORAGE_KEY);
    if (estadosGuardados) {
        const estados = JSON.parse(estadosGuardados);
        checkboxes.forEach(checkbox => {
            const id = checkbox.getAttribute('data-id');
            if (id && estados[id] === true) {
                checkbox.checked = true;
            }
        });
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const estados = {};
            checkboxes.forEach(cb => {
                const id = cb.getAttribute('data-id');
                if (id) {
                    estados[id] = cb.checked;
                }
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(estados));
        });
    });

    // ============================================
    // 11. MUTATION OBSERVER PARA ASEGURAR VISIBILIDAD
    // ============================================
    const mutationObserver = new MutationObserver(() => {
        hacerTodoVisible();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // ============================================
    // INICIALIZACIÓN
    // ============================================
    generarGridRosas();
    generarListaCosas();
    observarNuevosElementos();
    hacerTodoVisible();

    window.addEventListener('load', () => {
        const heroElements = document.querySelectorAll('.hero .fade-in');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
                el.style.opacity = '1';
                el.style.transform = 'none';
            }, index * 200);
        });
        hacerTodoVisible();
    });
});