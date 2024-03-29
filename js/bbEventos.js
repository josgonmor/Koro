// Función para generar coordenadas aleatorias en una ciudad específica
function generateRandomLocation(city) {
    const cityCoordinates = {
        'Madrid': { lat: 40.4168, lon: -3.7038 },
        'Barcelona': { lat: 41.3851, lon: 2.1734 },
        'Valencia': { lat: 39.4699, lon: -0.3763 },
        'Sevilla': { lat: 37.3886, lon: -5.9822 }
        // Agrega más ciudades según sea necesario
    };

    // Obtener coordenadas de la ciudad
    const cityCoords = cityCoordinates[city];

    // Generar coordenadas aleatorias dentro de la ciudad
    const randomLat = cityCoords.lat + (Math.random() - 0.5) * 0.2;
    const randomLon = cityCoords.lon + (Math.random() - 0.5) * 0.2;

    return { lat: randomLat, lng: randomLon };
}
var BB = [
    {
        event: "Concierto Estrella de la Noche",
        creator: "MúsicaEspaña",
        official: true,
        description: "Un espectacular concierto con artistas locales e internacionales. ¡No te pierdas esta increíble experiencia musical llena de emociones y ritmo vibrante!",
        image: "images/imagesEvents/0.jpg",
        labels: ["música", "entretenimiento"],
        price: 20,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 0
    },
    {
        event: "Festival de Arte Iberia",
        creator: "ArteVivo España",
        official: true,
        description: "Explorando el arte en las calles de la península ibérica. Únete a nosotros para celebrar la diversidad artística con instalaciones sorprendentes y performances en vivo.",
        image: "images/imagesEvents/1.jpg",
        labels: ["arte", "cultura"],
        price: 15,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 1
    },
    {
        event: "Cine en Casa con Tapas",
        creator: "CineGastronómico",
        official: false,
        description: "Disfruta de un maratón de películas en casa con auténticas tapas españolas. Una noche de cine acogedora con sabores deliciosos para todos los amantes del cine.",
        image: "images/imagesEvents/2.jpg",
        labels: ["cine", "gastronomía"],
        price: 5,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 2
    },
    {
        event: "KFC Fiesta de Pollo",
        creator: "KFC España",
        official: true,
        description: "¡Únete a la fiesta del pollo más grande en la ciudad! KFC España te invita a disfrutar de una noche llena de delicioso pollo frito, música en vivo, y sorpresas. ¡No te pierdas esta experiencia única!",
        image: "images/imagesEvents/3.jpg",
        labels: ["comida", "evento"],
        price: 15,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 3
    },
    {
        event: "Gran Fiesta de Cumpleaños Sorpresa",
        creator: "CelebracionesEspaña",
        official: false,
        description: "¡Celebra un cumpleaños inolvidable en nuestra Gran Fiesta de Cumpleaños Sorpresa! Un evento lleno de alegría, música, decoraciones festivas y, por supuesto, ¡una sorpresa especial para el cumpleañero! No te lo pierdas, será una noche llena de diversión y emociones.",
        image: "images/imagesEvents/4.jpg",
        labels: ["celebración", "sorpresa"],
        price: 10,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 4
    },
    {
        event: "Aventura Outdoor con Decathlon",
        creator: "Decathlon España",
        official: true,
        description: "Explora la naturaleza y descubre nuevas aventuras con Decathlon. Únete a nosotros para una jornada llena de deportes al aire libre, demostraciones de equipos y consejos de expertos. ¡No te pierdas esta experiencia emocionante!",
        image: "images/imagesEvents/5.jpg",
        labels: ["deporte", "aventura"],
        price: 15,
        city: "Valencia",
        location: generateRandomLocation("Valencia"),
        id: 5
    },
    {
        event: "Partido de Exhibición Betis vs. Invitados",
        creator: "Real Betis",
        official: true,
        description: "Únete a nosotros para un emocionante partido de exhibición donde jugadores del Real Betis se enfrentarán a invitados sorpresa. ¡Una experiencia futbolística única para los amantes del fútbol!",
        image: "images/imagesEvents/6.jpg",
        labels: ["deporte", "fútbol"],
        price: 25,
        city: "Sevilla",
        location: generateRandomLocation("Sevilla"),
        id: 6
    },
    {
        event: "Picnic en el Parque",
        creator: "Amigos del Aire Libre",
        official: false,
        description: "Disfruta de un día relajado en la naturaleza con nuestro evento de picnic. Trae tu cesta de picnic, relájate con amigos y disfruta de la tranquilidad del parque.",
        image: "images/imagesEvents/7.jpg",
        labels: ["ocio", "plan"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 7
    },
    {
        event: "Carrefour Fitness Challenge",
        creator: "Carrefour",
        official: true,
        description: "¡Ponte en forma con el Carrefour Fitness Challenge! Únete a nuestras clases de entrenamiento, recibe asesoramiento nutricional y participa para ganar emocionantes premios. ¡Una experiencia saludable para todos!",
        image: "images/imagesEvents/8.jpg",
        labels: ["deporte", "salud"],
        price: 5,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 8
    },
    {
        event: "Encuentro Ciudadano del PP Madrid",
        creator: "TotallyNotAyuso",
        official: true,
        description: "Participa en nuestro Encuentro Ciudadano del Partido Popular de Madrid. Un espacio para dialogar sobre temas importantes para la ciudad y conocer de cerca nuestras propuestas. ¡Tu participación es clave para construir un futuro mejor!",
        image: "images/imagesEvents/9.jpg",
        labels: ["política", "participación"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 9
    },

    {
        event: "Encuentro en el Parque",
        creator: "Amigos del Aire Libre",
        official: false,
        description: "¡Únete a nosotros para un día de diversión al aire libre! Trae tu manta, alimentos y amigos. Disfrutaremos de juegos, música relajante y buenas conversaciones en el hermoso entorno del parque. ¡Todos son bienvenidos!(en realidad es para fumar porros pero el chat no me deja pornerlo)",
        image: "images/imagesEvents/10.jpg",
        labels: ["ocio", "reunión"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 10
    },
    {
        event: "Calistenia en el Parque",
        creator: "FitLovers",
        official: false,
        description: "¡Únete a nosotros para una sesión de calistenia en el parque! No importa tu nivel de experiencia, todos son bienvenidos. Disfrutaremos de un entrenamiento al aire libre, compartiremos técnicas y nos motivaremos mutuamente. ¡Vamos a ponernos en forma juntos!",
        image: "images/imagesEvents/11.jpg",
        labels: ["deporte", "entrenamiento"],
        price: 0,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 11
    },

    {
        event: "Nadando en el Guadalquivir",
        creator: "Aventuras Acuáticas",
        official: false,
        description: "¡Sumérgete en una experiencia refrescante! Únete a nosotros para nadar en las aguas del río Guadalquivir. Disfrutaremos de un día soleado, exploraremos las orillas del río y nos sumergiremos en sus aguas. ¡Una manera única de disfrutar del verano!",
        image: "images/imagesEvents/12.jpg",
        labels: ["deporte", "aventura", "natación"],
        price: 0,
        city: "Sevilla",
        location: generateRandomLocation("Sevilla"),
        id: 12
    },

    {
        event: "Ruta de Tapas por Sevilla",
        creator: "TapasExplorers",
        official: false,
        description: "Embárcate en una emocionante Ruta de Tapas por los encantadores bares de Sevilla. Descubre los sabores auténticos de la ciudad, prueba las mejores tapas y disfruta de la compañía de otros amantes de la gastronomía. ¡Una experiencia culinaria que no te puedes perder!",
        image: "images/imagesEvents/13.jpg",
        labels: ["gastronomía", "ocio"],
        price: 10,
        city: "Sevilla",
        location: generateRandomLocation("Sevilla"),
        id: 13
    },
    {
        event: "Baile en la Plaza",
        creator: "DanceLover" + Math.floor(Math.random() * 1000),
        official: false,
        description: "Ven y únete a nosotros para una tarde llena de ritmo y baile en la hermosa plaza de Valencia. Todos son bienvenidos, ¡no importa tu nivel de baile! Disfrutaremos de diferentes estilos musicales, buena compañía y momentos divertidos. ¡No te lo pierdas!",
        image: "images/imagesEvents/14.jpg",
        labels: ["baile", "entretenimiento"],
        price: 0,
        city: "Valencia",
        location: generateRandomLocation("Valencia"),
        id: 14
    },
    {
        event: "Desfile de Moda Uniqlo",
        creator: "Uniqlo España",
        official: true,
        description: "Descubre las últimas tendencias de moda en nuestro exclusivo Desfile de Moda Uniqlo. Presentaremos las colecciones más elegantes y cómodas para esta temporada. ¡Únete a nosotros para una experiencia de moda única!",
        image: "images/imagesEvents/15.jpg",
        labels: ["moda", "tendencias"],
        price: 10,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 15
    },
    {
        event: "Quedada de Ajedrez en el Parque",
        creator: "ChessEnthusiast" + Math.floor(Math.random() * 1000),
        official: false,
        description: "¡Únete a nuestra quedada de ajedrez en el parque! Todos los niveles son bienvenidos. Trae tu tablero y desafía a nuevos oponentes, comparte estrategias y disfruta de una tarde al aire libre con amantes del ajedrez.",
        image: "images/imagesEvents/16.jpg",
        labels: ["ajedrez", "entretenimiento"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 16
    },
    {
        event: "Asamblea Abierta del PSOE",
        creator: "perritoMcGuau",
        official: true,
        description: "Participa en nuestra Asamblea Abierta del PSOE. Ven y comparte tus ideas, preocupaciones y propuestas para construir juntos un futuro mejor. ¡Tu voz es importante para nosotros!",
        image: "images/imagesEvents/17.jpg",
        labels: ["política", "participación"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 17
    },
    {
        event: "Picnic de Pan en Plaza España",
        creator: "BreadLover" + Math.floor(Math.random() * 1000),
        official: false,
        description: "¡Únete a nosotros para un picnic de pan en Plaza España! Trae tu pan favorito, comparte recetas, y disfruta de una tarde de conversación y sabores deliciosos en uno de los lugares más emblemáticos de Madrid.",
        image: "images/imagesEvents/18.jpg",
        labels: ["picnic", "gastronomía"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 18
    },
    {
        event: "Manifestación por el Cambio Climático",
        creator: "EcoActivist" + Math.floor(Math.random() * 1000),
        official: false,
        description: "Únete a nuestra manifestación por el cambio climático. Juntos alzaremos nuestras voces para exigir acciones concretas. Trae tus pancartas, comparte tus preocupaciones y únete a la lucha por un futuro sostenible y saludable para todos.",
        image: "images/imagesEvents/19.jpg",
        labels: ["protesta", "cambio climático"],
        price: 0,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 19
    },
    {
        event: "Experiencia Gourmet: Churros de 'La Tía Paqui'",
        creator: "ChurroConnoisseurs",
        official: true,
        description: "Embárcate en una experiencia única para paladares exigentes. Únete a nosotros para degustar los exquisitos churros de 'La Tía Paqui', reconocidos por su calidad excepcional. Disfruta de un ambiente exclusivo y saborea la dulce elegancia de esta delicia tradicional.",
        image: "images/imagesEvents/20.jpg",
        labels: ["gourmet", "exclusivo", "gastronomía"],
        price: 50,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 20
    },
    {
        event: "Escape Room Challenge",
        creator: "MysteryMasters",
        official: false,
        description: "¿Te atreves a aceptar nuestro desafío de Escape Room? Únete a MysteryMasters para una experiencia emocionante. Resuelve enigmas, encuentra pistas y trabaja en equipo para escapar antes de que se agote el tiempo. ¡Aventura y misterio te esperan!",
        image: "images/imagesEvents/22.jpg",
        labels: ["aventura", "misterio", "escape room"],
        price: 20,
        city: "Valencia",
        location: generateRandomLocation("Valencia"),
        id: 21
    },
    {
        event: "Noche Latina en Puro Latino",
        creator: "PuroLatinoClub",
        official: true,
        description: "¡Ven y únete a la Noche Latina en Puro Latino! Disfruta de la mejor música latina, baile y ambiente festivo. Baila al ritmo de la salsa, merengue y reggaetón. ¡Una noche llena de energía y diversión!",
        image: "images/imagesEvents/23.jpg",
        labels: ["música latina", "baile", "fiesta"],
        price: 15,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 22
    }
    ,
    {
        event: "Noche de Campeones",
        creator: "EliteBoxingPromotions",
        official: true,
        description: "¡Prepárate para una noche llena de acción en 'Noche de Campeones'! Los mejores boxeadores profesionales se enfrentarán en el cuadrilátero para disputar emocionantes combates. No te pierdas la oportunidad de presenciar puñetazos poderosos y estrategias tácticas en este evento de boxeo de élite.",
        image: "images/imagesEvents/24.jpg",
        labels: ["boxeo profesional", "deporte", "espectáculo"],
        price: 50,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 23
    }
    ,
    {
        event: "Arte Inusual: Pared, Payaso y Sinatra",
        creator: "AvantGardeExperience",
        official: false,
        description: "Sumérgete en una experiencia artística única. Ven y quédate parado mirando una pared blanca mientras un payaso realiza impresionantes piruetas al ritmo de 'Fly Me to the Moon' de Frank Sinatra. Una fusión de elementos inusuales para estimular tus sentidos y provocar reflexión.",
        image: "images/imagesEvents/25.jpg",
        labels: ["arte", "performance", "experiencia única"],
        price: 10,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 24
    }
    ,
    {
        event: "Torneo de Baloncesto Casual",
        creator: "BasketballEnthusiasts",
        official: false,
        description: "¡Participa en nuestro Torneo de Baloncesto Casual! No importa si eres un experto o solo quieres divertirte. Finge que sabes jugar al basket, diviértete con otros participantes y disfruta de una tarde deportiva sin presiones ni juicios.",
        image: "images/imagesEvents/26.jpg",
        labels: ["baloncesto", "deporte", "diversión"],
        price: 0,
        city: "Valencia",
        location: generateRandomLocation("Valencia"),
        id: 25
    }
    ,
    {
        event: "Desafío a la Lógica: Quema del Papel Irrompible",
        creator: "FirefighterChallenge",
        official: false,
        description: "Únete a nosotros en este evento único donde desafiaremos la lógica. Quemaremos un papel que supuestamente no se puede quemar. La seguridad es nuestra prioridad, y contaremos con la presencia y supervisión de bomberos expertos. ¡Ven y sé testigo de este desafío inusual!",
        image: "images/imagesEvents/21.jpg",
        labels: ["desafío", "seguridad", "bomberos"],
        price: 5,
        city: "Sevilla",
        location: generateRandomLocation("Sevilla"),
        id: 26
    }
    ,
    {
        event: "Convención de Imitadores de Peter Griffin",
        creator: "GriffinEnthusiasts",
        official: false,
        description: "¡Sé parte de la diversión en nuestra Convención de Imitadores de Peter Griffin! Viste como Peter, practica sus frases más divertidas y participa en concursos de imitación. Una jornada llena de risas y encuentros con otros fanáticos de 'Padre de Familia'.",
        image: "images/imagesEvents/27.jpg",
        labels: ["imitación", "humor", "fanáticos"],
        price: 10,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 27
    }
    ,
    {
        event: "Experiencia Surrealista: Viaje a lo Desconocido",
        creator: "DreamscapeExplorers",
        official: false,
        description: "Embárcate en un viaje surrealista a lo desconocido. En este evento, exploraremos dimensiones alternativas, interactuaremos con criaturas fantásticas y desafiaremos las leyes de la realidad. Únete a nosotros para una experiencia que desafiará tus percepciones y despertará tu imaginación.",
        image: "images/imagesEvents/28.jpg",
        labels: ["surrealismo", "experiencia", "imaginación"],
        price: 15,
        city: "Valencia",
        location: generateRandomLocation("Valencia"),
        id: 28
    }
    ,
    {
        event: "Trascendencia Efímera: Encuentro en el Laberinto Nebuloso",
        creator: "MenteAbstracta",
        official: false,
        description: "Sumérgete en la esencia etérea de nuestra experiencia cuántica. En este evento, explorarás los recovecos de un laberinto nebuloso donde las fronteras entre la realidad y la imaginación se desdibujan. Conecta con la esencia cósmica y experimenta la trascendencia efímera.",
        image: "images/imagesEvents/29.jpg",
        labels: ["experiencia", "trascendencia", "nebuloso"],
        price: 15,
        city: "Sevilla",
        location: generateRandomLocation("Sevilla"),
        id: 29
    },
    {
        event: "Festival de Ofertas Aliexpress",
        creator: "Aliexpress España",
        official: true,
        description: "¡Únete a nosotros en el emocionante Festival de Ofertas de Aliexpress! Descubre increíbles descuentos, promociones exclusivas y productos de alta calidad a precios imbatibles. No te pierdas esta oportunidad de ahorro y diversión de compras en línea.",
        image: "images/imagesEvents/30.jpg",
        labels: ["compras", "ofertas", "tecnología"],
        price: 0,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 30
    },
    {
        event: "Encuentro Anti-Koro",
        creator: "AntiKoroHater" + Math.floor(Math.random() * 1000),
        official: false,
        description: "¡Únete a nuestra reunión de haters de Koro! Compartiremos nuestras críticas y experiencias negativas con la aplicación. Si no eres fan de Koro, este evento es para ti. Ven y comparte tus frustraciones en un ambiente amigable.",
        image: "images/imagesEvents/31.jpg",
        labels: ["críticas", "opiniones", "humor"],
        price: 0,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona"),
        id: 31
    },
    {
        event: "Travesía Onírica: Ritos en la Noche Estrellada",
        creator: "VisionarioDelSueño" + Math.floor(Math.random() * 1000),
        official: false,
        description: "Adéntrate en una travesía onírica durante los Ritos en la Noche Estrellada. Este evento te sumergirá en un universo de sueños y realidad, explorando los límites de la conciencia. Vive una experiencia única bajo el manto estrellado de Madrid.",
        image: "images/imagesEvents/32.jpg",
        labels: ["onirismo", "experiencia", "Madrid"],
        price: 20,
        city: "Madrid",
        location: generateRandomLocation("Madrid"),
        id: 32
    }
    
];


function returnAll() {
    return BB;
}
function returnNumber(total) {
    var result = new Array(total);
    for (let i = 0; i < total; i++) {
        result[i] = BB[i];
    }
    return result;
}
function returnByCity(city){
    var result = new Array();
    for(let i of BB){
        if(i.city==city)
            result.push(i)
    }
    return result;

}
function returnBySearch(search, city){
    var result = new Array()
    var labels;
    for(let i of BB){
        labels=""
        for(let j of i.labels){
            labels+=j+" "
        }
        if(i.description.toUpperCase().includes(search.toUpperCase())||i.event.toUpperCase().includes(search.toUpperCase())||i.creator.toUpperCase().toUpperCase().includes(search.toUpperCase())||labels.toUpperCase().includes(search.toUpperCase())){
            if(city==""){
                result.push(i)
            }else{
                if(i.city==city){
                    result.push(i)
                }
            }
        }
    }
    return result;
}
function getByPos(pos){
    return BB[pos]
}