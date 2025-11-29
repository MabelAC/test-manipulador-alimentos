const questionBank = [
    // --- CONCEPTOS BÁSICOS (Pág 3) ---
    {
        id: 1,
        question: "¿Qué es un 'Alimento Adulterado' según el código?",
        options: [
            "Aquel que contiene sustancias no autorizadas o se le han quitado elementos útiles para disimular defectos.",
            "Aquel que tiene bacterias vivas.",
            "Aquel que se vende con una marca falsa.",
            "Aquel que ha sufrido un deterioro natural."
        ],
        answer: 0,
        explanation: "Adulterado es cuando se modifica intencionalmente (se quita o agrega algo) para engañar o tapar defectos."
    },
    {
        id: 2,
        question: "¿Qué es un 'Alimento Contaminado'?",
        options: [
            "El que tiene apariencia de un producto legítimo pero no lo es.",
            "El que contiene agentes vivos (virus, bacterias), químicos o físicos extraños a su composición normal.",
            "El que ha perdido valor nutritivo por cocción.",
            "El que tiene mal sabor."
        ],
        answer: 1,
        explanation: "Contaminado es cuando tiene agentes extraños (físicos, químicos o biológicos) que pueden causar daño."
    },
    {
        id: 3,
        question: "¿Qué tipo de contaminante es un trozo de vidrio en la comida?",
        options: ["Químico", "Biológico", "Físico", "Natural"],
        answer: 2,
        explanation: "Metales, vidrios, madera o plásticos son contaminantes FÍSICOS."
    },

    // --- BACTERIAS Y FACTORES (Pág 4-6) ---
    {
        id: 4,
        question: "¿Qué necesitan las bacterias para reproducirse (FAT TOM)?",
        options: [
            "Solo aire y luz.",
            "Nutrientes, Agua, Temperatura adecuada, Tiempo, Oxígeno (algunas) y Acidez favorable.",
            "Frío extremo y sequedad.",
            "Jabón y desinfectante."
        ],
        answer: 1,
        explanation: "Las bacterias necesitan comida (proteínas), humedad (agua), calor y tiempo para multiplicarse."
    },
    {
        id: 5,
        question: "En condiciones ideales, ¿cada cuánto tiempo se duplican las bacterias?",
        options: ["Cada 24 horas", "Cada 20 minutos", "Cada 2 horas", "Una vez por semana"],
        answer: 1,
        explanation: "Por fisión binaria, una bacteria se divide en dos cada 20 minutos aprox."
    },
    {
        id: 6,
        question: "¿Qué son las esporas o endosporas?",
        options: [
            "Formas de resistencia que protegen a la bacteria de condiciones adversas (como el calor).",
            "Bacterias muertas.",
            "Un tipo de virus.",
            "Hongos visibles en el pan."
        ],
        answer: 0,
        explanation: "Algunas bacterias se encapsulan en esporas para sobrevivir al calor o falta de comida, y reviven cuando las condiciones mejoran."
    },
    {
        id: 7,
        question: "Si un alimento huele y sabe bien, ¿significa que es seguro?",
        options: [
            "Sí, el olfato nunca falla.",
            "No necesariamente, las bacterias patógenas no siempre alteran el olor, color o sabor.",
            "Sí, si no tiene moho es seguro.",
            "Depende si es carne o verdura."
        ],
        answer: 1,
        explanation: "¡Cuidado! Un alimento puede estar contaminado con millones de bacterias patógenas y verse, oler y saber normal."
    },

    // --- TEMPERATURAS Y CONSERVACIÓN (Pág 6, 28, 43) ---
    {
        id: 8,
        question: "¿Cuál es la 'Zona de Peligro' de temperatura?",
        options: ["De 0°C a 10°C", "De 5°C a 65°C", "Más de 100°C", "Menos de 0°C"],
        answer: 1,
        explanation: "Entre 5°C y 65°C es donde las bacterias se multiplican a gran velocidad."
    },
    {
        id: 9,
        question: "¿A qué temperatura mueren la mayoría de las bacterias patógenas?",
        options: ["A 40°C", "Por encima de los 75°C", "A 0°C", "A temperatura ambiente"],
        answer: 1,
        explanation: "La cocción segura se garantiza superando los 75°C en el centro del alimento."
    },
    {
        id: 10,
        question: "¿Qué ocurre a temperaturas de refrigeración (0°C a 5°C)?",
        options: [
            "Las bacterias mueren.",
            "Las bacterias se reproducen más rápido.",
            "Se enlentece (retrasa) la reproducción bacteriana.",
            "El alimento se esteriliza."
        ],
        answer: 2,
        explanation: "El frío de la heladera NO mata bacterias, solo hace que se reproduzcan muy lentamente."
    },
    {
        id: 11,
        question: "¿Qué pasa si congelo un alimento a -18°C?",
        options: [
            "Las bacterias explotan y mueren.",
            "Se detiene el crecimiento bacteriano, pero las bacterias quedan 'dormidas' (latentes).",
            "El alimento pierde todos sus nutrientes.",
            "Se eliminan las toxinas."
        ],
        answer: 1,
        explanation: "El freezer detiene la actividad, pero al descongelar, las bacterias vuelven a multiplicarse."
    },
    {
        id: 12,
        question: "Método correcto para descongelar un pollo:",
        options: [
            "Dejarlo sobre la mesada toda la noche.",
            "Ponerlo al sol.",
            "En la heladera, microondas o bajo chorro de agua fría corriente.",
            "Sumergirlo en agua caliente estancada."
        ],
        answer: 2,
        explanation: "Nunca descongelar a temperatura ambiente. La opción más segura es pasarlo a la heladera con tiempo."
    },

    // --- ENFERMEDADES (ETAs) (Pág 8-10) ---
    {
        id: 13,
        question: "¿Qué bacteria causa el Síndrome Urémico Hemolítico (SUH)?",
        options: ["Salmonella", "Escherichia Coli O157:H7", "Botulismo", "Triquinosis"],
        answer: 1,
        explanation: "Es muy peligrosa en niños, afecta los riñones y suele estar en carne picada mal cocida."
    },
    {
        id: 14,
        question: "¿Cómo se previene la Triquinosis?",
        options: [
            "Lavando las verduras con lavandina.",
            "Cocinando bien la carne de cerdo y comprando chacinados con rótulo oficial.",
            "Congelando el pollo.",
            "Usando guantes de látex."
        ],
        answer: 1,
        explanation: "La Triquinosis es un parásito del cerdo. Se evita cocinando bien y analizando la carne en origen."
    },
    {
        id: 15,
        question: "¿Qué enfermedad se asocia a las conservas caseras mal hechas y latas hinchadas?",
        options: ["Botulismo", "Hepatitis A", "Cólera", "Listeria"],
        answer: 0,
        explanation: "El Clostridium botulinum genera una toxina mortal en ambientes sin oxígeno (latas, conservas en aceite)."
    },
    {
        id: 16,
        question: "¿Dónde se encuentra principalmente la Salmonella?",
        options: [
            "En latas de atún.",
            "En huevos crudos, pollo crudo y mayonesas caseras.",
            "En el pan.",
            "En el agua potable."
        ],
        answer: 1,
        explanation: "La Salmonella suele venir del intestino de aves. Cuidado con huevos crudos o pollo mal cocido."
    },
    {
        id: 17,
        question: "El Staphylococcus aureus suele contaminar los alimentos a través de:",
        options: [
            "Agua sucia.",
            "Manipuladores con heridas, que estornudan o tosen sobre la comida.",
            "Carne de vaca cruda.",
            "Verduras mal lavadas."
        ],
        answer: 1,
        explanation: "Esta bacteria vive en la piel y nariz humana. Es un indicador de mala higiene personal."
    },

    // --- CONTAMINACIÓN CRUZADA Y ALMACENAMIENTO (Pág 7, 26) ---
    {
        id: 18,
        question: "¿Qué es la contaminación cruzada DIRECTA?",
        options: [
            "Usar el mismo cuchillo para todo.",
            "Cuando un alimento contaminado (ej. carne cruda) toca directamente a uno listo para comer.",
            "No lavarse las manos.",
            "Cocinar poco la comida."
        ],
        answer: 1,
        explanation: "Es el contacto físico entre el alimento crudo y el cocido (ej. sangre de carne goteando sobre una torta)."
    },
    {
        id: 19,
        question: "¿Qué es la contaminación cruzada INDIRECTA?",
        options: [
            "Cuando las bacterias pasan de un alimento a otro a través de utensilios, manos o superficies sucias.",
            "Cuando se mezclan dos alimentos cocidos.",
            "Cuando la comida toca el piso.",
            "Cuando hay moscas."
        ],
        answer: 0,
        explanation: "Ocurre cuando usamos la misma tabla para cortar pollo crudo y luego tomate, sin lavar en el medio."
    },
    {
        id: 20,
        question: "Orden correcto en la heladera (de arriba a abajo):",
        options: [
            "Crudos arriba, cocidos abajo.",
            "Todo mezclado.",
            "Alimentos cocidos/listos arriba; Carnes crudas abajo.",
            "Verduras abajo de la carne."
        ],
        answer: 2,
        explanation: "Lo ya cocinado va arriba para que no le caiga nada. Lo crudo (que puede chorrear) va abajo de todo."
    },
    {
        id: 21,
        question: "¿Qué sistema se usa para la rotación de mercadería?",
        options: ["PEPS (Primero Entra, Primero Sale)", "Lo que está más a mano sale primero", "Guardar lo nuevo adelante", "Usar lo más barato primero"],
        answer: 0,
        explanation: "Primero vence, primero sale. Se debe usar lo más viejo antes de que venza."
    },

    // --- HIGIENE Y POES (Pág 11-18) ---
    {
        id: 22,
        question: "Pasos correctos para el lavado de manos:",
        options: [
            "Solo agua y secar con repasador.",
            "Agua, jabón, cepillar uñas, frotar 20 seg, enjuagar, secar con toalla papel.",
            "Alcohol en gel directo.",
            "Agua caliente y detergente de platos."
        ],
        answer: 1,
        explanation: "El frotado y el cepillado de uñas son clave. Secar con papel descartable evita recontaminar."
    },
    {
        id: 23,
        question: "¿Cuándo hay que lavarse las manos?",
        options: [
            "Solo al llegar al trabajo.",
            "Después de ir al baño, tocar dinero, tocar basura, toser o cambiar de tarea (de crudo a cocido).",
            "Antes de irse a casa.",
            "Cuando se ven sucias."
        ],
        answer: 1,
        explanation: "El lavado debe ser frecuente, especialmente tras situaciones que contaminan las manos."
    },
    {
        id: 24,
        question: "¿Cuál es la diferencia entre LIMPIAR y DESINFECTAR?",
        options: [
            "Son lo mismo.",
            "Limpiar es quitar la suciedad visible; Desinfectar es reducir bacterias a niveles seguros.",
            "Limpiar usa lavandina; Desinfectar usa jabón.",
            "Desinfectar es solo para hospitales."
        ],
        answer: 1,
        explanation: "Primero se limpia (detergente + agua) para sacar la grasa/mugre, luego se desinfecta (químico) para matar bichos."
    },
    {
        id: 25,
        question: "¿Se puede mezclar detergente con lavandina?",
        options: [
            "Sí, es más potente.",
            "No, nunca. El detergente inactiva a la lavandina y puede generar gases tóxicos.",
            "Solo si el agua está caliente.",
            "Sí, para limpiar el piso."
        ],
        answer: 1,
        explanation: "JAMÁS mezclar. Además de peligroso, el detergente anula el efecto desinfectante de la lavandina."
    },

    // --- SIN TACC / CELIAQUÍA (Pág 42-44) ---
    {
        id: 26,
        question: "¿Qué significa T.A.C.C.?",
        options: ["Trigo, Arroz, Cebada, Centeno", "Trigo, Avena, Cebada, Centeno", "Tomate, Ajo, Cebolla, Carne", "Trigo, Azúcar, Carne, Calcio"],
        answer: 1,
        explanation: "Son los cereales que contienen gluten."
    },
    {
        id: 27,
        question: "¿Cómo se evita la contaminación cruzada con gluten?",
        options: [
            "Soplando las migas de la mesa.",
            "Usando utensilios exclusivos, almacenando en sectores separados y limpiando a fondo.",
            "Cocinando a alta temperatura el gluten.",
            "El gluten no contamina."
        ],
        answer: 1,
        explanation: "El gluten no muere por calor (es una proteína, no una bacteria). Solo la separación física y limpieza funcionan."
    },

    // --- SITUACIONES PRÁCTICAS ---
    {
        id: 28,
        question: "Situación: Se corta la luz y la heladera queda apagada 4 horas. ¿Qué haces con la carne?",
        options: [
            "La huelo, si está bien la uso.",
            "Si la temperatura subió a zona de peligro, debo evaluar descartarla.",
            "La congelo inmediatamente.",
            "La cocino rápido."
        ],
        answer: 1,
        explanation: "Si se pierde la cadena de frío por tiempo prolongado, el riesgo es alto."
    },
    {
        id: 29,
        question: "Estás resfriado pero tienes que ir a trabajar con alimentos. ¿Qué debes hacer?",
        options: [
            "Tomar una aspirina y no decir nada.",
            "Usar barbijo obligatoriamente y lavarte las manos muy seguido tras sonarte la nariz.",
            "No usar pañuelos.",
            "Trabajar solo en la caja."
        ],
        answer: 1,
        explanation: "Lo ideal es no manipular alimentos, pero si se hace, el barbijo es barrera obligatoria."
    },
    {
        id: 30,
        question: "El uniforme de trabajo debe ser:",
        options: [
            "De color oscuro para que no se note la mancha.",
            "De color claro, limpio y exclusivo para el trabajo.",
            "Cualquier ropa cómoda.",
            "Puede tener botones y bolsillos arriba."
        ],
        answer: 1,
        explanation: "El color claro permite ver la suciedad. No debe tener bolsillos superiores para que no caigan cosas a la comida."
    },
    // --- MÁS PREGUNTAS (Extracto variado) ---
    {
        id: 31,
        question: "¿Cuál es el tiempo máximo que un alimento puede estar fuera de la heladera (zona de peligro)?",
        options: ["6 horas", "2 horas", "12 horas", "Todo el día si no hace calor"],
        answer: 1,
        explanation: "Pasadas las 2 horas, la carga bacteriana puede ser peligrosa."
    },
    {
        id: 32,
        question: "Para desinfectar superficies con alcohol, la proporción ideal es:",
        options: ["Alcohol puro (96%)", "Alcohol al 70% (7 partes alcohol, 3 agua)", "Mitad y mitad", "Alcohol en gel"],
        answer: 1,
        explanation: "El alcohol al 70% penetra mejor en las bacterias que el alcohol puro."
    },
    {
        id: 33,
        question: "¿Qué es un portador sano?",
        options: [
            "Alguien que come sano.",
            "Una persona que tiene el microorganismo patógeno en su cuerpo pero no presenta síntomas, y puede contagiar.",
            "Alguien que ya se curó.",
            "Un alimento probiótico."
        ],
        answer: 1,
        explanation: "Los manipuladores pueden estar enfermos sin saberlo (portadores sanos) y contagiar a los clientes."
    },
    {
        id: 34,
        question: "¿Las mascotas pueden entrar a la cocina del restaurante?",
        options: ["Sí, si están limpias.", "No, está prohibido.", "Solo gatos para cazar ratones.", "Sí, si no tocan la mesa."],
        answer: 1,
        explanation: "Los animales domésticos están prohibidos en zonas de elaboración."
    },
    {
        id: 35,
        question: "¿Cómo deben guardarse los productos de limpieza?",
        options: [
            "Debajo de la mesada de cocina.",
            "Junto con los alimentos enlatados.",
            "En un sector separado, alejado de los alimentos y rotulados.",
            "En botellas de gaseosa vacías."
        ],
        answer: 2,
        explanation: "Deben estar lejos para evitar contaminación química accidental."
    },
    {
        id: 36,
        question: "¿El agua para cocinar debe ser potable?",
        options: ["Sí, siempre.", "Solo si se va a beber, para hervir papas no importa.", "No hace falta si hierve.", "Depende la zona."],
        answer: 0,
        explanation: "El agua utilizada en todo proceso (incluso hielo y lavado) debe ser potable."
    },
    {
        id: 37,
        question: "¿Qué indica el rótulo de un alimento?",
        options: ["Solo la marca.", "Fecha de vencimiento, ingredientes, lote y RNE/RNPA.", "El precio.", "La foto del producto."],
        answer: 1,
        explanation: "El rótulo da la trazabilidad y seguridad del producto."
    },
    {
        id: 38,
        question: "Si usas guantes descartables, ¿ya no necesitas lavarte las manos?",
        options: ["Verdad, el guante reemplaza el lavado.", "Falso, hay que lavarse las manos antes de ponerse los guantes y al cambiarlos.", "Depende del guante.", "Solo si se rompen."],
        answer: 1,
        explanation: "El guante es una segunda piel. Si tus manos están sucias abajo, es un riesgo. Y el guante también se ensucia."
    },
    {
        id: 39,
        question: "¿Qué se debe hacer con la basura en la cocina?",
        options: ["Tirarla una vez por semana.", "Tener tachos sin tapa para ser más rápido.", "Tachos con tapa, pedal y bolsa, retirarla frecuentemente.", "Acumularla en un rincón."],
        answer: 2,
        explanation: "Los residuos atraen plagas. Deben estar tapados y sacarse seguido."
    },
    {
        id: 40,
        question: "Los huevos se deben cascar (romper):",
        options: ["En el borde del recipiente donde se bate.", "En un recipiente aparte y luego verterlo.", "Sobre la sartén directo.", "Con la mano."],
        answer: 1,
        explanation: "Se hace aparte para evitar que caiga cáscara sucia dentro de la preparación o que el huevo esté feo."
    },
    {
        id: 41,
        question: "¿Se puede usar madera en la cocina (tablas, cucharas)?",
        options: ["Sí, es lo más tradicional.", "No, es porosa y junta bacterias difíciles de limpiar.", "Sí, si se lava con lavandina.", "Solo para picadas."],
        answer: 1,
        explanation: "La madera está prohibida en gastronomía profesional porque absorbe humedad y bacterias."
    },
    {
        id: 42,
        question: "¿Qué es la trazabilidad?",
        options: ["Saber quién cocinó.", "Poder seguir el rastro de un alimento desde su origen hasta el consumo.", "El camino del delivery.", "El precio."],
        answer: 1,
        explanation: "Permite detectar dónde ocurrió un problema si hay una intoxicación."
    },
    {
        id: 43,
        question: "¿Cuál es la temperatura máxima para recibir productos congelados?",
        options: ["-18°C (con tolerancia breve)", "0°C", "-5°C", "10°C"],
        answer: 0,
        explanation: "Deben llegar duros y congelados. Si están blandos, se rechazan."
    },
    {
        id: 44,
        question: "¿Qué bacteria se asocia a las hamburguesas mal cocidas?",
        options: ["E. Coli", "Salmonella", "Listeria", "Vibrio"],
        answer: 0,
        explanation: "La Escherichia Coli está en el intestino de la vaca y pasa a la carne en la faena."
    },
    {
        id: 45,
        question: "¿Un manipulador con diarrea o vómitos puede trabajar?",
        options: ["Sí, si tiene cuidado.", "No, debe avisar y no manipular alimentos hasta el alta médica.", "Sí, si usa pañal.", "Solo en la cocina, no atendiendo."],
        answer: 1,
        explanation: "Es altísimo riesgo de contagio. Debe ser excluido de la tarea."
    },
    {
        id: 46,
        question: "¿Las tablas de corte deben tener colores diferentes para qué?",
        options: ["Para que la cocina se vea linda.", "Para evitar la contaminación cruzada (ej. roja carnes, verde vegetales).", "Por moda.", "Para distinguir tamaños."],
        answer: 1,
        explanation: "La codificación por colores ayuda a no mezclar crudo con cocido o vegetales con carnes."
    },
    {
        id: 47,
        question: "¿Qué es un alimento perecedero?",
        options: ["El que dura mucho tiempo (arroz).", "El que se echa a perder rápido y necesita frío (leche, carne).", "El que viene en lata.", "El agua."],
        answer: 1,
        explanation: "Tienen alta humedad y nutrientes, ideales para bacterias. Requieren heladera."
    },
    {
        id: 48,
        question: "¿Qué hacer si veo una cucaracha en la cocina?",
        options: ["Matarla y seguir.", "Ignorarla.", "Avisar al responsable y revisar el plan de control de plagas.", "Tirar toda la comida."],
        answer: 2,
        explanation: "Una cucaracha visible suele indicar un nido. Se requiere acción profesional (MIP)."
    },
    {
        id: 49,
        question: "¿El hielo se considera un alimento?",
        options: ["No, es agua congelada.", "Sí, y debe manipularse con la misma higiene que la comida.", "Solo si se compra.", "No tiene bacterias."],
        answer: 1,
        explanation: "El frío conserva bacterias. El hielo sucio contamina la bebida."
    },
    {
        id: 50,
        question: "Para enfriar una sopa grande rápido, ¿qué es mejor?",
        options: ["Meter la olla gigante en la heladera.", "Dejarla en la ventana.", "Dividirla en recipientes playos (poco profundos).", "Ponerle hielo adentro."],
        answer: 2,
        explanation: "Al reducir el volumen, el calor sale más rápido y pasa menos tiempo en zona de peligro."
    },
    // --- NUEVAS PREGUNTAS (BLOQUE 2 - IDs 51-100) ---

    // --- RECEPCIÓN Y TRANSPORTE ---
    {
        id: 51,
        question: "Al recibir mercadería, ¿qué se debe verificar primero?",
        options: ["Los productos secos.", "Los productos congelados y refrigerados.", "Las facturas de compra.", "La limpieza del camión."],
        answer: 1,
        explanation: "Siempre se prioriza la cadena de frío. Primero se revisan y guardan los congelados/refrigerados, luego los secos."
    },
    {
        id: 52,
        question: "¿Cómo debe estar la cabina del conductor en un vehículo de transporte de alimentos?",
        options: ["Conectada con la caja de carga para ventilar.", "Totalmente separada de la unidad de transporte de alimentos.", "Decorada con cortinas.", "Puede llevar mascotas."],
        answer: 1,
        explanation: "La cabina del conductor debe estar aislada de la carga para evitar contaminación."
    },
    {
        id: 53,
        question: "Si llega un proveedor con carne fresca colgada tocando el piso del camión, ¿qué haces?",
        options: ["La lavo con lavandina y la uso.", "Corto la parte que tocó el piso.", "Rechazo la mercadería inmediatamente.", "La cocino bien cocida."],
        answer: 2,
        explanation: "El contacto con el piso es contaminación directa inaceptable. Se debe rechazar la entrega."
    },
    {
        id: 54,
        question: "¿Cuál es la vigencia del Carnet de Manipulador de Alimentos en CABA/Nación?",
        options: ["1 año.", "3 años.", "Es permanente.", "5 años."],
        answer: 1,
        explanation: "El carnet tiene una validez de 3 años, luego debe renovarse."
    },

    // --- ALMACENAMIENTO (DETALLES) ---
    {
        id: 55,
        question: "¿Se pueden guardar latas abiertas en la heladera?",
        options: ["Sí, si se tapan con un plato.", "No, el contenido debe trasvasarse a un recipiente plástico o de vidrio con tapa.", "Sí, no hay problema.", "Solo si son de frutas."],
        answer: 1,
        explanation: "Una vez abierta, la lata se oxida y puede contaminar el alimento químicamente. Se debe cambiar de envase."
    },
    {
        id: 56,
        question: "¿Es correcto lavar los huevos antes de guardarlos en la heladera?",
        options: ["Sí, para eliminar la salmonella de la cáscara.", "No, porque se elimina la película protectora y las bacterias pueden ingresar por los poros.", "Sí, con agua caliente.", "Depende si tienen plumas."],
        answer: 1,
        explanation: "Los huevos NO se lavan para guardar. Solo se pueden lavar justo antes de cocinarlos si es muy necesario."
    },
    {
        id: 57,
        question: "¿A qué altura mínima del piso deben estar los alimentos en el depósito?",
        options: ["Directamente en el piso.", "A 5 cm.", "A 14-15 cm sobre tarimas.", "A 1 metro."],
        answer: 2,
        explanation: "Deben estar elevados (aprox 15cm) para facilitar la limpieza, ventilación y evitar contacto con plagas."
    },
    {
        id: 58,
        question: "Si almaceno productos químicos (limpieza) y alimentos en el mismo estante:",
        options: ["Está bien si los alimentos están cerrados.", "Es un riesgo grave de contaminación química.", "Está bien si pongo los químicos abajo.", "Solo si es lavandina."],
        answer: 1,
        explanation: "Nunca se mezclan. Deben estar en sectores separados o armarios exclusivos bajo llave."
    },

    // --- ENFERMEDADES (ETAs - DETALLES) ---
    {
        id: 59,
        question: "¿Qué enfermedad es causada comúnmente por arroz o pastas cocidas dejadas a temperatura ambiente?",
        options: ["Salmonella.", "Bacillus cereus.", "Triquinosis.", "Botulismo."],
        answer: 1,
        explanation: "El Bacillus cereus produce esporas que germinan en cereales cocidos enfriados lentamente fuera de la heladera."
    },
    {
        id: 60,
        question: "¿La bacteria Listeria monocytogenes tiene una característica peligrosa especial, cuál es?",
        options: ["Resiste el calor.", "Puede reproducirse y sobrevivir a temperaturas de heladera.", "Solo ataca a las frutas.", "Es visible a simple vista."],
        answer: 1,
        explanation: "A diferencia de otras, la Listeria aguanta el frío. Es muy peligrosa para embarazadas (fiambres, quesos blandos)."
    },
    {
        id: 61,
        question: "¿Qué es la Hepatitis A y cómo se transmite en alimentos?",
        options: ["Es una bacteria de la carne.", "Es un virus que se transmite por vía fecal-oral (higiene deficiente del manipulador o agua contaminada).", "Es un hongo del pan.", "Viene en los enlatados."],
        answer: 1,
        explanation: "Es un virus. La prevención clave es el lavado de manos y uso de agua potable."
    },
    {
        id: 62,
        question: "¿Qué síntoma NO es común en una ETA?",
        options: ["Vómitos.", "Diarrea.", "Dolor de muelas.", "Fiebre."],
        answer: 2,
        explanation: "Las ETAs suelen presentar cuadros gastrointestinales, fiebre o dolor de cabeza, no dolor dental."
    },

    // --- HIGIENE PERSONAL Y BPM ---
    {
        id: 63,
        question: "¿Está permitido usar reloj o anillos (incluso la alianza) al manipular alimentos?",
        options: ["Sí, si están limpios.", "Solo la alianza de casamiento.", "No, se deben retirar todos los objetos personales de las manos.", "Sí, si uso guantes arriba."],
        answer: 2,
        explanation: "Debajo de los anillos y relojes se acumulan bacterias y sudor. Además, son un peligro físico si caen a la comida."
    },
    {
        id: 64,
        question: "¿Qué debe hacer un manipulador si tiene una herida en la mano?",
        options: ["Dejar de trabajar.", "Ponerse una curita y seguir.", "Desinfectar, cubrir con vendaje impermeable y colocarse un guante o dedil.", "Solo usar alcohol."],
        answer: 2,
        explanation: "La herida es fuente de Estafilococo. Debe estar doblemente protegida (vendaje + guante) para que no toque alimentos."
    },
    {
        id: 65,
        question: "¿Es correcto probar la comida con el dedo para ver el punto de sal?",
        options: ["Sí, es rápido.", "No, se debe usar una cuchara limpia y lavarla tras su uso (o usar descartable).", "Sí, si me lavé las manos.", "Solo si la sopa está hirviendo."],
        answer: 1,
        explanation: "Probar con el dedo o reutilizar la misma cuchara sin lavar introduce saliva y bacterias a la preparación."
    },
    {
        id: 66,
        question: "¿Se puede comer, fumar o mascar chicle en el área de elaboración?",
        options: ["Sí, si tengo cuidado.", "Solo mascar chicle.", "No, está terminantemente prohibido.", "Sí, en un rincón."],
        answer: 2,
        explanation: "Estas acciones generan saliva y pueden llevar manos a la boca, contaminando luego el alimento."
    },

    // --- PROCEDIMIENTOS DE LIMPIEZA Y PLAGAS ---
    {
        id: 67,
        question: "¿Cada cuánto se deben limpiar los tanques de agua del establecimiento?",
        options: ["Nunca.", "Cada 3 años.", "Semestralmente (cada 6 meses).", "Cuando el agua sale sucia."],
        answer: 2,
        explanation: "Es obligatorio realizar limpieza y desinfección de tanques cada 6 meses en CABA."
    },
    {
        id: 68,
        question: "¿Qué indican manchas de grasa en los zócalos o excrementos pequeños parecidos a pimienta?",
        options: ["Falta de limpieza.", "Presencia de roedores o cucarachas.", "Humedad.", "Nada importante."],
        answer: 1,
        explanation: "Son signos evidentes de plagas. Se debe activar el control de plagas inmediatamente."
    },
    {
        id: 69,
        question: "¿Es recomendable tener gatos en el depósito para controlar ratones?",
        options: ["Sí, es el método más natural.", "No, los animales domésticos están prohibidos por riesgo de contaminación.", "Solo si están vacunados.", "Sí, si no entran a la cocina."],
        answer: 1,
        explanation: "Las mascotas traen pelos, garrapatas y bacterias. El control de plagas debe ser químico/físico por profesionales."
    },
    {
        id: 70,
        question: "¿Los residuos (basura) deben sacarse de la cocina...?",
        options: ["Una vez a la semana.", "Cuando el tacho rebalsa.", "Frecuentemente, evitando acumulación, y al finalizar el turno.", "Al día siguiente."],
        answer: 2,
        explanation: "La acumulación de basura atrae plagas y genera malos olores."
    },

    // --- TEMPERATURAS Y COCCIÓN (MÁS DETALLES) ---
    {
        id: 71,
        question: "¿Cuál es la forma correcta de recalentar una comida que estaba en la heladera?",
        options: ["Calentar hasta que esté tibia.", "Llevarla rápidamente a 75°C en el centro.", "Dejarla a temperatura ambiente.", "En baño maría tibio."],
        answer: 1,
        explanation: "El recalentamiento debe ser rápido y superar los 75°C para matar cualquier bacteria que haya crecido."
    },
    {
        id: 72,
        question: "¿El microondas cocina de manera uniforme?",
        options: ["Sí, es perfecto.", "No, suele dejar 'puntos fríos' donde sobreviven bacterias.", "Sí, si es potente.", "Esteriliza la comida."],
        answer: 1,
        explanation: "Al usar microondas, se debe revolver y asegurar que TODA la comida alcance la temperatura segura."
    },
    {
        id: 73,
        question: "Para enfriar alimentos cocidos, ¿cuál es el tiempo máximo para bajar de 65°C a 5°C?",
        options: ["24 horas.", "Menos de 2 horas (idealmente) o en etapas rápidas.", "6 horas.", "No importa el tiempo."],
        answer: 1,
        explanation: "El enfriamiento rápido es crítico. Si tarda mucho, las bacterias se multiplican en la zona tibia."
    },
    {
        id: 74,
        question: "¿El limón o el vinagre cocinan la carne (ej: ceviche)?",
        options: ["Sí, matan todas las bacterias.", "No, solo cambian el color y textura, pero las bacterias sobreviven.", "Sí, es igual que hervir.", "Matan parásitos pero no bacterias."],
        answer: 1,
        explanation: "Es un mito peligroso. La acidificación no reemplaza la cocción por calor para eliminar patógenos."
    },

    // --- CONTAMINACIÓN CRUZADA Y GLUTEN ---
    {
        id: 75,
        question: "¿Puede el polvo de harina en suspensión contaminar un plato para celíacos?",
        options: ["No, porque flota.", "Sí, es contaminación cruzada ambiental y es muy peligrosa.", "Solo si cae mucha cantidad.", "El celíaco puede comer un poco."],
        answer: 1,
        explanation: "La harina es volátil. En cocinas mixtas es muy difícil garantizar 'Libre de Gluten' por el aire."
    },
    {
        id: 76,
        question: "¿Se puede usar el mismo aceite para freír papas (para celíacos) y milanesas?",
        options: ["Sí, el aceite caliente mata el gluten.", "No, el aceite queda contaminado con restos de pan rallado.", "Sí, si se filtra.", "Depende la temperatura."],
        answer: 1,
        explanation: "El aceite compartido es una fuente clásica de contaminación cruzada."
    },
    {
        id: 77,
        question: "El uso de tablas de madera en gastronomía comercial...",
        options: ["Es ideal para asados.", "Está prohibido porque es un material poroso y difícil de desinfectar.", "Es obligatorio.", "Depende del municipio."],
        answer: 1,
        explanation: "Se deben usar tablas de plástico (polietileno) o materiales no porosos. La madera junta hongos y bacterias."
    },
    {
        id: 78,
        question: "Color recomendado de tabla para cortar pescado crudo:",
        options: ["Roja.", "Verde.", "Azul.", "Blanca."],
        answer: 2,
        explanation: "Aunque no es ley estricta, la convención es: Azul (Pescado), Roja (Carne Roja), Amarilla (Pollo), Verde (Verduras), Blanca (Pan/Quesos)."
    },

    // --- SITUACIONES VARIADAS ---
    {
        id: 79,
        question: "En un servicio de buffet o autoservicio, ¿es necesario poner protección de vidrio sobre la comida?",
        options: ["No, es incómodo.", "Sí, para evitar que los clientes tosan o estornuden sobre la comida (saliva).", "Solo para las postres.", "Es opcional."],
        answer: 1,
        explanation: "Las barreras antisaliva (cúpulas) son obligatorias para proteger los alimentos expuestos."
    },
    {
        id: 80,
        question: "¿Se debe lavar el pollo crudo bajo la canilla?",
        options: ["Sí, siempre.", "No, nunca. El agua salpica y esparce bacterias (Campylobacter/Salmonella) por toda la cocina.", "Solo con agua caliente.", "Sí, con vinagre."],
        answer: 1,
        explanation: "Lavar el pollo es un error común. Solo logras contaminar la bacha, la mesada y los utensilios cercanos."
    },
    {
        id: 81,
        question: "¿Qué es un alimento 'Genuino'?",
        options: ["El que responde a las especificaciones legales, sin adulteración ni falsificación.", "El que es muy rico.", "El que es importado.", "El que se compra en la calle."],
        answer: 0,
        explanation: "Es el alimento legal, que cumple con lo que dice su rótulo y la normativa."
    },
    {
        id: 82,
        question: "¿El alcohol en gel reemplaza el lavado de manos con agua y jabón?",
        options: ["Sí, siempre.", "No, solo es un complemento. Si hay suciedad visible, el alcohol no sirve.", "Sí, es mejor.", "Es lo mismo."],
        answer: 1,
        explanation: "El alcohol no limpia grasa ni tierra. Primero lavar, secar y LUEGO desinfectar con alcohol."
    },
    {
        id: 83,
        question: "¿Qué información NO es obligatoria en el rótulo de un alimento envasado?",
        options: ["Fecha de vencimiento.", "Ingredientes.", "Receta de cocina sugerida.", "Lote y RNE."],
        answer: 2,
        explanation: "La receta es marketing. Los datos de seguridad y trazabilidad (Lote, RNE, Vencimiento) son obligatorios."
    },
    {
        id: 84,
        question: "Si se cae un utensilio al piso durante el servicio:",
        options: ["Lo levanto, lo limpio con la servilleta y sigo.", "Lo lavo y desinfecto antes de volver a usarlo (o uso uno nuevo).", "Soplo y sigo.", "Lo paso por agua rápido."],
        answer: 1,
        explanation: "El piso es zona sucia. Requiere lavado completo."
    },
    {
        id: 85,
        question: "¿Cuál es la temperatura ideal del freezer para alimentos congelados?",
        options: ["-5°C", "0°C", "-18°C o menos.", "-10°C"],
        answer: 2,
        explanation: "-18°C es el estándar internacional para frenar el deterioro biológico."
    },
    {
        id: 86,
        question: "Los trapos rejilla de tela en la cocina...",
        options: ["Son ideales para todo.", "Deben evitarse o mantenerse siempre en agua clorada, ya que dispersan bacterias.", "Se lavan una vez al mes.", "Son obligatorios."],
        answer: 1,
        explanation: "Se prefiere papel descartable. Si se usa rejilla, es un gran vector de contaminación si no se desinfecta constantemente."
    },
    {
        id: 87,
        question: "Para preparar una solución desinfectante de lavandina, ¿qué agua uso?",
        options: ["Agua caliente para potenciar.", "Agua fría.", "Agua hirviendo.", "Cualquiera."],
        answer: 1,
        explanation: "El agua caliente evapora el cloro y anula la desinfección. Siempre agua fría."
    },
    {
        id: 88,
        question: "¿Qué es el R.N.E.?",
        options: ["Registro Nacional de Establecimiento.", "Registro de Nutrición Especial.", "Regla de Normas Estatales.", "Registro Nacional de Envases."],
        answer: 0,
        explanation: "Es el número que habilita a la fábrica/establecimiento. El R.N.P.A. es para el Producto."
    },
    {
        id: 89,
        question: "¿Cuándo se considera que un alimento está falsificado?",
        options: ["Cuando tiene bacterias.", "Cuando se designa con un nombre y marca que no le corresponde (copia).", "Cuando está vencido.", "Cuando tiene poca sal."],
        answer: 1,
        explanation: "Falsificar es imitar una marca o producto legal para engañar."
    },
    {
        id: 90,
        question: "¿Las moscas pueden transmitir enfermedades a los alimentos?",
        options: ["No, son inofensivas.", "Sí, transportan gérmenes en sus patas desde la basura/heces a la comida.", "Solo las abejas.", "Solo si muerden."],
        answer: 1,
        explanation: "Las moscas son vectores mecánicos de alta peligrosidad."
    },
    {
        id: 91,
        question: "¿Cómo se debe guardar la carne cruda para evitar que sus jugos caigan sobre otros alimentos?",
        options: ["Envueltas en papel de diario.", "En recipientes impermeables, tapados y en la parte inferior de la heladera.", "En un plato hondo arriba de todo.", "En bolsas de consorcio."],
        answer: 1,
        explanation: "Recipiente cerrado y ubicación inferior son claves."
    },
    {
        id: 92,
        question: "¿Qué es la 'Cadena de Frío'?",
        options: ["Poner hielo en las bebidas.", "Mantener la temperatura controlada del alimento desde la producción hasta el consumo.", "Tener muchas heladeras.", "El frío del invierno."],
        answer: 1,
        explanation: "Es la continuidad ininterrumpida de las condiciones de temperatura."
    },
    {
        id: 93,
        question: "¿Un alimento vencido puede comercializarse si se ve bien?",
        options: ["Sí, si está rico.", "No, está prohibido y es riesgoso.", "Sí, con descuento.", "Sí, si se cocina."],
        answer: 1,
        explanation: "La fecha de vencimiento es el límite de seguridad garantizado por el fabricante."
    },
    {
        id: 94,
        question: "¿Qué bacterias pueden estar presentes en conservas de pescado o vegetales mal procesadas?",
        options: ["Clostridium botulinum.", "Salmonella.", "E. Coli.", "Triquinella."],
        answer: 0,
        explanation: "El botulismo es el riesgo principal en conservas."
    },
    {
        id: 95,
        question: "¿El vapor se puede usar para desinfectar?",
        options: ["No, solo moja.", "Sí, el vapor a alta temperatura mata microorganismos.", "Solo limpia, no desinfecta.", "Es peligroso."],
        answer: 1,
        explanation: "El calor (vapor o agua >80°C) es un método físico de desinfección muy efectivo."
    },
    {
        id: 96,
       uestion: "¿Por qué no se debe dar miel a menores de 1 año?",
        options: ["Por el riesgo de Botulismo del Lactante.", "Porque es muy dulce y daña los dientes.", "Porque pueden ahogarse.", "Porque tiene mucha grasa."],
        answer: 0,
        explanation: "La miel puede contener esporas de Clostridium botulinum. El sistema digestivo inmaduro de los bebés no puede combatirlas y genera la toxina mortal."
    },
    {
        id: 97,
        question: "¿Por qué no se deben usar frascos de vidrio en la cocina (salvo excepciones)?",
        options: ["Son caros.", "Si se rompen, los vidrios pueden caer en la comida y son contaminación física.", "Son pesados.", "No se pueden lavar."],
        answer: 1,
        explanation: "Se prefiere plástico o acero inoxidable para evitar accidentes físicos."
    },
    {
        id: 98,
        question: "¿Es seguro descongelar alimentos sobre la estufa o radiador?",
        options: ["Sí, es muy rápido.", "No, favorece el crecimiento bacteriano explosivo.", "Sí, en invierno.", "Depende la carne."],
        answer: 1,
        explanation: "Es una de las peores formas, ya que el exterior se calienta mucho mientras el centro sigue congelado."
    },
    {
        id: 99,
        question: "¿Qué se debe hacer si se corta la luz por muchas horas?",
        options: ["Abrir la heladera a cada rato para revisar.", "Mantener las puertas cerradas lo más posible y evaluar temperatura al volver la luz.", "Volver a congelar todo.", "Cocinar todo al día siguiente."],
        answer: 1,
        explanation: "Mantener cerrado conserva el frío. Si los alimentos superaron los 5°C por más de 2 horas, hay que descartar."
    },
    {
        id: 100,
        question: "¿Qué se debe hacer si se corta la luz por muchas horas?",
        options: ["Abrir la heladera a cada rato para revisar.", "Mantener las puertas cerradas lo más posible y evaluar temperatura al volver la luz.", "Volver a congelar todo.", "Cocinar todo al día siguiente."],
        answer: 1,
        explanation: "Mantener cerrado conserva el frío. Si los alimentos superaron los 5°C por más de 2 horas, hay que descartar."
    },
    {
        id: 101,
        question: "Situación: Tienes que ir al baño en medio de tu turno de trabajo. ¿Qué haces con el delantal/uniforme?",
        options: [
            "Me lo dejo puesto para no perder tiempo.", 
            "Me lo quito antes de entrar al baño.", 
            "Solo me saco la cofia.", 
            "Me pongo un abrigo encima."
        ],
        answer: 1,
        explanation: "El uniforme de trabajo nunca debe ingresar al baño (zona sucia), ya que se carga de bacterias fecales del ambiente. (Manual pág. 14)"
    },
    {
        id: 102,
        question: "¿Cómo deben servirse los aderezos (mayonesa, kétchup) en la mesa de un restaurante?",
        options: [
            "En frascos rellenables.", 
            "En sachets individuales (monodosis) o envases originales no rellenables.", 
            "En potes abiertos con cuchara.", 
            "Sueltos en el plato."
        ],
        answer: 1,
        explanation: "Está prohibido rellenar frascos de aderezos por el riesgo de contaminación y pérdida de cadena de frío. Se deben usar sobres individuales. (Manual pág. 33)"
    },
    {
        id: 103,
        question: "Situación: Estás cortando fiambre y la máquina se ensucia mucho. ¿Cada cuánto debes limpiarla a fondo?",
        options: [
            "Una vez a la semana.", 
            "Cada vez que cambio de fiambre y al finalizar el día desarmando las piezas.", 
            "Solo cuando se traba.", 
            "Una vez al mes."
        ],
        answer: 1,
        explanation: "La cortadora de fiambre es un punto crítico. Se debe sanear diariamente y evitar la contaminación cruzada entre distintos fiambres. (Manual pág. 33)"
    },
    {
        id: 104,
        question: "¿Es seguro guardar lavandina o detergente en botellas vacías de gaseosa o agua mineral?",
        options: [
            "Sí, si le pongo un cartelito.", 
            "No, NUNCA. Es causa frecuente de intoxicación accidental grave.", 
            "Sí, es práctico.", 
            "Solo si la botella es transparente."
        ],
        answer: 1,
        explanation: "Está prohibido trasvasar químicos a envases de alimentos. Confunde al usuario y puede ser fatal si se ingiere por error. (Manual pág. 16 - Depósito de limpieza)"
    },
    {
        id: 105,
        question: "Si un compañero estornuda directamente sobre la comida que está preparando, ¿qué debe hacerse con esa comida?",
        options: [
            "Mezclarla bien.", 
            "Calentarla un poco.", 
            "Descartarla por completo.", 
            "Servirla igual."
        ],
        answer: 2,
        explanation: "La comida recibió una lluvia de gotas de saliva con bacterias (Staphylococcus aureus, virus, etc.). No es recuperable y debe tirarse."
    },
    {
        id: 106,
        question: "Saliste del baño y vas directo a amasar sin lavarte las manos. ¿Qué riesgo hay?",
        options: [
            "Ninguno si usé papel higiénico.", 
            "Riesgo de transmisión Fecal-Oral (Hepatitis A, Shigella, etc.).", 
            "Solo se ensucia la masa con polvo.", 
            "Está bien si uso alcohol en gel."
        ],
        answer: 1,
        explanation: "La falta de lavado de manos post-baño es una de las causas principales de brotes de enfermedades. El alcohol no reemplaza el lavado si hay suciedad. (Manual pág. 10)"
    },
    {
        id: 107,
        question: "¿Se puede barrer en seco (con escoba) mientras se está elaborando comida?",
        options: [
            "Sí, para mantener limpio.", 
            "No, porque levanta polvo y microorganismos que caen en la comida.", 
            "Sí, si barro despacito.", 
            "Solo si hay mucha tierra."
        ],
        answer: 1,
        explanation: "El barrido en seco levanta contaminación del aire. Se deben usar métodos húmedos o limpiar cuando no se esté cocinando. (Manual pág. 19 - POES)"
    },
    {
        id: 108,
        question: "Estás cobrando en la caja y manejando dinero. ¿Puedes ir a servir comida inmediatamente?",
        options: [
            "Sí, es rápido.", 
            "No. Debo lavarme las manos o usar utensilios/guantes exclusivos para servir.", 
            "Sí, si me limpio en el pantalón.", 
            "Solo si el cliente no mira."
        ],
        answer: 1,
        explanation: "El dinero es un objeto muy sucio. Nunca se debe tocar alimento directo después de tocar billetes sin higienizarse. (Manual pág. 31/33)"
    },
    {
        id: 109,
        question: "¿Qué característica deben tener los pisos y paredes de una cocina habilitada?",
        options: [
            "Ser de madera.", 
            "Tener alfombras.", 
            "Ser lisos, impermeables, lavables y de color claro.", 
            "Ser de ladrillo a la vista."
        ],
        answer: 2,
        explanation: "Las superficies deben permitir una fácil limpieza y visualización de la suciedad. (Manual pág. 14)"
    },
    {
        id: 110,
        question: "¿Cómo reconoces que un pescado fresco está en buen estado?",
        options: [
            "Ojos hundidos y opacos.", 
            "Ojos brillantes y saltones, agallas rojas y carne firme.", 
            "Olor fuerte a amoníaco.", 
            "Escamas que se salen solas."
        ],
        answer: 1,
        explanation: "Estos son los signos de frescura. Si tiene olor fuerte o carne blanda, se rechaza. (Manual pág. 26 - Colores de tablas, implícito frescura)"
    },
    {
        id: 111,
        question: "¿Las luces o tubos fluorescentes de la cocina deben tener protección?",
        options: [
            "No hace falta.", 
            "Sí, protección anti-estallido para que si explotan no caigan vidrios a la comida.", 
            "Solo si son LED.", 
            "Solo si están bajos."
        ],
        answer: 1,
        explanation: "Es una norma de seguridad física obligatoria para evitar contaminación física con vidrios. (Manual pág. 15)"
    },
    {
        id: 112,
        question: "¿Qué documento debe dejar la empresa de control de plagas tras la visita?",
        options: [
            "Solo la factura.", 
            "Un certificado con la 'Memoria Descriptiva' (qué veneno usaron, dónde y dosis) y hoja de seguridad.", 
            "Una foto de la cocina.", 
            "Nada."
        ],
        answer: 1,
        explanation: "Es obligatorio tener el certificado y saber qué productos químicos se aplicaron en el local. (Manual pág. 23)"
    },
    {
        id: 113,
        question: "Al descongelar en microondas, ¿cuándo debo cocinar el alimento?",
        options: [
            "Al día siguiente.", 
            "Inmediatamente después de descongelar.", 
            "Puedo volver a guardarlo en la heladera.", 
            "Cuando quiera."
        ],
        answer: 1,
        explanation: "El microondas descongela desparejo y empieza a cocinar partes. Se debe terminar la cocción al instante para evitar desarrollo bacteriano. (Manual pág. 28)"
    },
    {
        id: 114,
        question: "¿Se pueden usar cartones o diarios como estantes en la heladera?",
        options: [
            "Sí, absorben la humedad.", 
            "No. Son materiales porosos, sucios y bloquean la circulación del frío.", 
            "Sí, para no ensuciar.", 
            "Solo si son del día."
        ],
        answer: 1,
        explanation: "Los materiales porosos y sucios están prohibidos dentro de equipos de frío ya que no se pueden limpiar y bloquean el aire. (Manual pág. 26)"
    },
    {
        id: 115,
        question: "¿Por qué las ventanas de la cocina deben tener mallas mosquiteras?",
        options: [
            "Para que no entre sol.", 
            "Para evitar el ingreso de insectos y plagas (barrera física).", 
            "Para que no miren desde afuera.", 
            "Para decorar."
        ],
        answer: 1,
        explanation: "Es una barrera física obligatoria para impedir que moscas y otros insectos (vectores) toquen los alimentos. (Manual pág. 15/23)"
    },
    {
        id: 116,
        question: "¿Cuál es la mejor manera de enfriar una olla grande de guiso?",
        options: [
            "Dejarla en la hornalla apagada.", 
            "Pasarlo a recipientes playos (poca profundidad) para que enfríe rápido.", 
            "Soplarle.", 
            "Meterla al freezer hirviendo."
        ],
        answer: 1,
        explanation: "Al reducir el volumen y aumentar la superficie, el calor sale más rápido y pasa menos tiempo en la zona de peligro. (Manual pág. 30)"
    },
    {
        id: 117,
        question: "Las frutas y verduras que se comen crudas deben lavarse y luego...",
        options: [
            "Secarse con trapo.", 
            "Desinfectarse (sanitizarse) con agua y gotas de lavandina apta o vinagre.", 
            "Solo lavar con agua.", 
            "Cocinar."
        ],
        answer: 1,
        explanation: "El lavado saca la tierra, la desinfección mata bacterias. OJO: El manual recomienda lavandina apta para alimentos, el vinagre no es desinfectante potente. (Manual pág. 28)"
    },
    {
        id: 118,
        question: "¿Es seguro comprar conservas 'caseras' sin etiqueta en la ruta?",
        options: [
            "Sí, son más naturales.", 
            "No, riesgo altísimo de Botulismo por falta de control bromatológico.", 
            "Sí, si la tapa hace ruido.", 
            "Sí, si son dulces."
        ],
        answer: 1,
        explanation: "Sin RNE/RNPA y control de pH/temperatura, las conservas caseras pueden contener toxina botulínica mortal. (Manual pág. 9 y 34)"
    },
    {
        id: 119,
        question: "Si abro un sachet de leche y sobra, ¿cómo lo guardo?",
        options: [
            "Abierto en la puerta.", 
            "Le doblo la punta y listo.", 
            "Lo paso a una jarra limpia con tapa o lo cierro herméticamente.", 
            "Lo dejo afuera."
        ],
        answer: 2,
        explanation: "Los envases abiertos son puertas para bacterias y olores. Deben cerrarse bien o trasvasarse a recipientes aptos. (Manual pág. 26/27)"
    },
    {
        id: 120,
        question: "¿Qué indica un envase de yogur o lata hinchado?",
        options: [
            "Que trae más producto.", 
            "Actividad microbiana (gas producido por bacterias). Se debe descartar.", 
            "Que está batido.", 
            "Que es de mejor calidad."
        ],
        answer: 1,
        explanation: "La hinchazón en cualquier envase cerrado es señal de descomposición o fermentación indeseada. (Manual pág. 27)"
    },
    {
        id: 121,
        question: "¿Cuál es la forma correcta de secarse las manos después de lavarlas?",
        options: [
            "Con el delantal.", 
            "Sacudiéndolas al aire.", 
            "Con toallas de papel descartable.", 
            "Con el repasador de la cocina."
        ],
        answer: 2,
        explanation: "El papel descartable es higiénico. Los repasadores de tela suelen estar sucios y recontaminan las manos limpias. (Manual pág. 12)"
    },
    {
        id: 122,
        question: "En el depósito, ¿se aplica la regla 'Primero Entra, Primero Sale' (PEPS)?",
        options: [
            "No, saco lo que tengo a mano.", 
            "Sí, para evitar que los productos viejos se venzan al fondo.", 
            "Solo con la carne.", 
            "No hace falta."
        ],
        answer: 1,
        explanation: "La rotación correcta evita pérdidas económicas y riesgos sanitarios por consumir productos vencidos. (Manual pág. 26/27)"
    },
    {
        id: 123,
        question: "¿Se puede estornudar encima de la comida si me tapo con la mano?",
        options: [
            "Sí.", 
            "No. Se debe estornudar hacia el codo o un pañuelo, desecharlo y lavarse las manos.", 
            "Sí, si digo salud.", 
            "Depende la comida."
        ],
        answer: 1,
        explanation: "Estornudar en la mano llena la mano de bacterias (Staphylococcus) que luego van a la comida. (Manual pág. 12/13)"
    },
    {
        id: 124,
        question: "¿Qué característica debe tener el agua para hacer hielo?",
        options: [
            "Debe ser agua mineral.", 
            "Debe ser potable.", 
            "Puede ser agua de pozo sin analizar.", 
            "Cualquier agua sirve si se congela."
        ],
        answer: 1,
        explanation: "El hielo es un alimento. Si el agua no es potable, el hielo será un vehículo de enfermedades (Cólera, Hepatitis, etc). (Manual pág. 33)"
    },
    {
        id: 125,
        question: "Si la tabla de picar tiene grietas profundas o rajaduras:",
        options: [
            "Se debe lijar.", 
            "Se debe descartar y reemplazar.", 
            "Se lava con más lavandina.", 
            "Se usa del lado liso."
        ],
        answer: 1,
        explanation: "En las grietas se acumulan bacterias y restos de comida imposibles de sacar, formando biofilms. Debe cambiarse. (Manual pág. 34)"
    },
    {
        id: 126,
        question: "Si el agua de la canilla sale turbia o marrón...",
        options: [
            "Cocino igual, el calor mata todo.", 
            "No la uso. Debo usar agua potable/mineral hasta que se solucione.", 
            "La filtro con un trapo.", 
            "La uso para hielo."
        ],
        answer: 1,
        explanation: "El agua ingrediente debe ser potable y cristalina. Turbidez indica suciedad en cañerías o tanque. (Manual pág. 15)"
    },
    {
        id: 127,
        question: "¿Qué hago si encuentro una rata muerta en una trampa?",
        options: [
            "La tiro a la basura de la cocina.", 
            "No la toco. Aviso al servicio de plagas o la retiro con protección (guantes) desinfectando la zona.", 
            "La dejo ahí.", 
            "La pateo afuera."
        ],
        answer: 1,
        explanation: "Los cadáveres de plagas son focos infecciosos. Requieren disposición segura para no dispersar patógenos. (Manual pág. 22)"
    },
    {
        id: 128,
        question: "¿Se puede usar el mismo trapo para limpiar el baño y la cocina?",
        options: [
            "Sí, si se lava.", 
            "No, JAMÁS. Debe haber utensilios exclusivos para cada sector.", 
            "Sí, con lavandina.", 
            "Si es nuevo sí."
        ],
        answer: 1,
        explanation: "Es contaminación cruzada grave de zona sucia a zona limpia. Se recomienda codificar por colores. (Manual pág. 33)"
    },
    {
        id: 129,
        question: "Si uso un termómetro para medir la temperatura de la carne cruda, ¿qué debo hacer antes de medir la cocida?",
        options: [
            "Limpiarlo y desinfectarlo (alcohol).", 
            "Nada.", 
            "Pasarlo por agua.", 
            "Secarlo con el delantal."
        ],
        answer: 0,
        explanation: "El pinche del termómetro puede llevar bacterias de una carne cruda a una cocida si no se desinfecta entre usos."
    },
    {
        id: 130,
        question: "¿Puedo probar si la leche está agria bebiendo un sorbo directo del envase?",
        options: [
            "Sí, es la mejor forma.", 
            "No, contamino todo el envase con mi saliva.", 
            "Sí, si soy el único que la usa.", 
            "Mejor olerla."
        ],
        answer: 1,
        explanation: "La boca tiene bacterias. Si tomas del envase, introduces bacterias que echarán a perder el resto del producto."
    },
    {
        id: 131,
        question: "¿Qué significa que un alimento sea 'inocuo'?",
        options: [
            "Que no tiene sabor.", 
            "Que no causa daño a la salud del consumidor.", 
            "Que es barato.", 
            "Que es dietético."
        ],
        answer: 1,
        explanation: "La inocuidad es la garantía de que el alimento es seguro y no nos enfermará. (Manual pág. 6)"
    },
    {
        id: 132,
        question: "¿Qué es un vector en higiene alimentaria?",
        options: [
            "Un vehículo.", 
            "Un animal (mosca, rata, cucaracha) que transporta enfermedades.", 
            "Una bacteria.", 
            "Un tipo de cocción."
        ],
        answer: 1,
        explanation: "Las plagas son vectores porque llevan los gérmenes de un lado a otro (de la basura a la comida). (Manual pág. 22)"
    },
    {
        id: 133,
        question: "¿El vinagre desinfecta igual que la lavandina?",
        options: [
            "Sí, mata todo.", 
            "No. Acidifica pero no es un desinfectante potente aprobado para superficies críticas.", 
            "Sí, es igual al cloro.", 
            "Solo en ensaladas."
        ],
        answer: 1,
        explanation: "Aunque el ácido ayuda, no garantiza la eliminación de patógenos resistentes como lo hace la lavandina o el alcohol al 70%. (Manual pág. 5 y 18)"
    },
    {
        id: 134,
        question: "Si tengo barba, ¿qué debo usar en la cocina?",
        options: [
            "Nada.", 
            "Un barbijo o cubrebocas que cubra el vello facial.", 
            "Crema de afeitar.", 
            "Redecilla en el pelo solamente."
        ],
        answer: 1,
        explanation: "El pelo de la barba también cae y contamina. El manual indica 'No usar barba o bigote' o cubrirla totalmente. (Manual pág. 14)"
    },
    {
        id: 135,
        question: "¿Está permitido vender 'Milanesas Caseras' congeladas sin etiqueta en un almacén?",
        options: [
            "Sí, en el barrio sí.", 
            "No, todo producto envasado para la venta debe tener rótulo reglamentario (RNE/RNPA).", 
            "Sí, si se ve la carne.", 
            "Depende el peso."
        ],
        answer: 1,
        explanation: "Sin rótulo, no hay trazabilidad ni garantía de origen. Es venta clandestina y está prohibida. (Manual pág. 24)"
    },
    {
        id: 136,
        question: "¿Qué hago con el aceite de freír usado?",
        options: [
            "Lo tiro a la rejilla/desagüe.", 
            "Lo guardo en bidones para recolección diferenciada (RAV).", 
            "Lo tiro a la tierra.", 
            "Lo uso para ensalada."
        ],
        answer: 1,
        explanation: "El aceite tapa cañerías y contamina el agua. Se debe reciclar como RAV (Residuo Aceite Vegetal)."
    },
    {
        id: 137,
        question: "¿Cuándo vence un alimento?",
        options: [
            "Cuando huele mal.", 
            "En la fecha indicada en el envase por el fabricante.", 
            "Un mes después de la fecha.", 
            "Nunca vence."
        ],
        answer: 1,
        explanation: "Respetar la fecha de vencimiento es ley. Después de ese día, el fabricante no asegura inocuidad ni calidad."
    },
    {
        id: 138,
        question: "Si uso guantes descartables, ¿cuándo los cambio?",
        options: [
            "Cuando se rompen, se ensucian o cambio de tarea (de crudo a cocido).", 
            "Al final del día.", 
            "Nunca, los lavo puestos.", 
            "Cada 10 minutos."
        ],
        answer: 0,
        explanation: "Los guantes sucios contaminan igual que las manos sucias. No reemplazan el lavado y son de un solo uso. (Manual pág. 13)"
    },
    {
        id: 139,
        question: "Las uñas del manipulador deben estar...",
        options: [
            "Largas y pintadas.", 
            "Cortas, limpias y sin esmalte.", 
            "Con uñas postizas.", 
            "Como quiera."
        ],
        answer: 1,
        explanation: "El esmalte se descascara y cae a la comida. Las uñas largas acumulan suciedad. (Manual pág. 13)"
    },
    {
        id: 140,
        question: "¿Qué es la contaminación física?",
        options: [
            "Bacterias.", 
            "Lavandina en la comida.", 
            "Objetos extraños (pelo, aros, vidrio, hueso, plástico).", 
            "Olor feo."
        ],
        answer: 2,
        explanation: "Es cualquier objeto sólido ajeno al alimento que puede causar asfixia o cortes. (Manual pág. 3)"
    },
    {
        id: 141,
        question: "¿Qué debo hacer si se inunda la cocina con aguas servidas (cloaca)?",
        options: [
            "Seguir cocinando con botas.", 
            "Cerrar, limpiar, desinfectar todo y tirar alimentos que pudieron contactarse.", 
            "Poner trapos.", 
            "Ventilar."
        ],
        answer: 1,
        explanation: "Es una emergencia sanitaria grave. No se puede operar hasta asegurar la higiene total."
    },
    {
        id: 142,
        question: "Situación: Se rompe un vaso de vidrio sobre la hielera.",
        options: [
            "Saco los vidrios grandes y sigo.", 
            "Tiro TODO el hielo, lavo la hielera y cargo hielo nuevo.", 
            "Miro bien si quedó vidrio.", 
            "Lo uso para bebidas licuadas."
        ],
        answer: 1,
        explanation: "El vidrio mezclado con hielo es invisible. El riesgo de que un cliente trague vidrio es inaceptable."
    },
    {
        id: 143,
        question: "¿Las esponjas de cocina son eternas?",
        options: [
            "Sí, duran años.", 
            "No, acumulan muchas bacterias. Deben desinfectarse o cambiarse seguido.", 
            "Solo si se rompen.", 
            "Son autolimpiantes."
        ],
        answer: 1,
        explanation: "La esponja húmeda es un nido de bacterias. Requiere recambio frecuente. (Manual pág. 20)"
    },
    {
        id: 144,
        question: "¿Cuánto tiempo pueden estar los huevos batidos (crudos) a temperatura ambiente?",
        options: [
            "Todo el día.", 
            "Lo menos posible. Preparar de a poco y mantener en frío.", 
            "4 horas.", 
            "Hasta que huelan mal."
        ],
        answer: 1,
        explanation: "El huevo crudo es medio de cultivo ideal para Salmonella. No debe perder la cadena de frío. (Manual pág. 8)"
    },
    {
        id: 145,
        question: "¿Qué hago con las sobras de pan de la panera del cliente?",
        options: [
            "Las tiro a la basura.", 
            "Las guardo para el siguiente cliente.", 
            "Hago pan rallado.", 
            "Me las como."
        ],
        answer: 0,
        explanation: "Todo alimento que fue servido y 'volvió' del salón se considera desecho, ya que pudo ser manipulado por el cliente."
    },
    {
        id: 146,
        question: "¿Quién es el responsable de la inocuidad de los alimentos?",
        options: [
            "Solo el gobierno.", 
            "Solo el cliente.", 
            "Todos los eslabones de la cadena (productor, transportista, elaborador, consumidor).", 
            "El médico."
        ],
        answer: 2,
        explanation: "La seguridad alimentaria es responsabilidad compartida. (Manual pág. 6)"
    },
    {
        id: 147,
        question: "¿Por qué no se debe soplar para enfriar la comida de un niño (o cliente)?",
        options: [
            "Es mala educación.", 
            "Al soplar expulsamos gotitas de saliva con bacterias (Estafilococo, etc.).", 
            "Se enfría desparejo.", 
            "No pasa nada."
        ],
        answer: 1,
        explanation: "Soplar es contaminar biológicamente el alimento con nuestra flora bucal."
    },
    {
        id: 148,
        question: "¿Es obligatorio tener agua caliente en la cocina?",
        options: [
            "No, con fría alcanza.", 
            "Sí, para el correcto lavado de manos y desengrasado de utensilios.", 
            "Solo en invierno.", 
            "Es un lujo."
        ],
        answer: 1,
        explanation: "Sin agua caliente, la grasa no se remueve eficazmente y la higiene es deficiente. (Manual pág. 15)"
    },
    {
        id: 149,
        question: "Si uso tabla de madera en mi casa, ¿puedo usarla en el restaurante?",
        options: [
            "Sí, es mía.", 
            "No, la normativa prohíbe madera en comercios por ser porosa y juntar hongos.", 
            "Sí, si la lavo.", 
            "Depende la madera."
        ],
        answer: 1,
        explanation: "Lo que vale en casa no siempre vale en el comercio. La madera está prohibida (salvo excepciones muy específicas y tratadas). (Manual pág. 15)"
    },
    {
        id: 150,
        question: "¿El manipulador debe avisar si tiene diarrea o vómitos?",
        options: [
            "No, le da vergüenza.", 
            "Sí, inmediatamente a su supervisor para no manipular comida.", 
            "Se pone un tapón.", 
            "Toma remedio y sigue."
        ],
        answer: 1,
        explanation: "La salud pública está por encima de la vergüenza. Es obligación reportar síntomas para evitar brotes epidémicos. (Manual pág. 14)"
    },
    // --- BLOQUE 4: RUBROS ESPECÍFICOS, ANEXOS Y DETALLES TÉCNICOS (IDs 151-200) ---
    {
        id: 151,
        question: "En un KIOSCO, ¿está permitido elaborar sándwiches o panchos caseros?",
        options: [
            "Sí, si tiene lugar.",
            "No. Los kioscos tienen prohibida la elaboración propia de alimentos; solo pueden vender envasados de origen.",
            "Sí, si usa guantes.",
            "Solo tostados."
        ],
        answer: 1,
        explanation: "Los kioscos solo están habilitados para vender productos que ya vienen envasados de fábrica con su rótulo. (Manual pág. 35)"
    },
    {
        id: 152,
        question: "En una CARNICERÍA, ¿se puede tener la carne picada preparada en bandejas desde la mañana?",
        options: [
            "Sí, para adelantar trabajo.",
            "No. La carne debe picarse en el momento a la vista del cliente.",
            "Sí, si está en la heladera.",
            "Solo si se tapa."
        ],
        answer: 1,
        explanation: "Picar con anticipación aumenta exponencialmente la superficie de contacto para bacterias. Está prohibido tener stock de carne picada. (Manual pág. 33)"
    },
    {
        id: 153,
        question: "En las GRANJAS, ¿se pueden vender los pollos con las garras (patas) puestas?",
        options: [
            "Sí, es tradicional.",
            "No, está prohibido vender pollos con sus garras.",
            "Sí, si se lavan.",
            "Depende del cliente."
        ],
        answer: 1,
        explanation: "Las garras están en contacto directo con heces y tierra, siendo un foco de contaminación alto. (Manual pág. 33)"
    },
    {
        id: 154,
        question: "En una VERDULERÍA, ¿se pueden vender bandejitas de 'sopa de verdura' cortada en el local?",
        options: [
            "Sí, es práctico.",
            "No. Las verduras procesadas deben venir envasadas y rotuladas de un establecimiento habilitado.",
            "Sí, si se envuelve en film.",
            "Solo en invierno."
        ],
        answer: 1,
        explanation: "El procesado (cortado/pelado) requiere condiciones higiénicas de fábrica que una verdulería común no posee. (Manual pág. 34)"
    },
    {
        id: 155,
        question: "En una PANADERÍA, los sándwiches de miga deben exhibirse...",
        options: [
            "Sobre el mostrador a temperatura ambiente.",
            "En heladeras/vitrinas refrigeradas obligatoriamente.",
            "En canastos de mimbre.",
            "Cerca del horno."
        ],
        answer: 1,
        explanation: "Al tener mayonesa, fiambres y alta humedad, los sándwiches de miga requieren cadena de frío constante. (Manual pág. 35)"
    },
    {
        id: 156,
        question: "¿Qué está prohibido en las HELADERÍAS respecto a los colores?",
        options: [
            "Usar colores pastel.",
            "La adición de colorantes fluorescentes.",
            "Mezclar colores.",
            "El color azul."
        ],
        answer: 1,
        explanation: "Los colores fluorescentes denotan la presencia de colorantes artificiales no permitidos por el Código Alimentario. (Manual pág. 36)"
    },
    {
        id: 157,
        question: "En una FÁBRICA DE PASTAS, ¿cuánto duran las pastas frescas artesanales sin conservantes?",
        options: [
            "1 mes.",
            "Máximo 48 horas (refrigeradas).",
            "1 semana.",
            "Lo que diga el vendedor."
        ],
        answer: 1,
        explanation: "Al ser frescas, con huevo y humedad, y sin conservantes industriales, su vida útil es extremadamente corta. (Manual pág. 36)"
    },
    {
        id: 158,
        question: "¿Se pueden exhibir facturas o bizcochos sobre el mostrador al alcance del cliente sin protección?",
        options: [
            "Sí, es autoservicio.",
            "No. Deben tener protección (vitrina, campana) para evitar la contaminación por saliva/aliento de los clientes.",
            "Sí, si están lejos del borde.",
            "Solo las medialunas."
        ],
        answer: 1,
        explanation: "Los productos listos para consumir no pueden estar expuestos al ambiente sin barrera física. (Manual pág. 35)"
    },

    // --- MÉTODOS DE CONSERVACIÓN (ANEXO I - Págs 43-44) ---
    {
        id: 159,
        question: "¿En qué consiste la PASTEURIZACIÓN?",
        options: [
            "Hervir la leche 1 hora.",
            "Calentar a temperaturas altas por corto tiempo y enfriar rápido para reducir patógenos.",
            "Congelar rápido.",
            "Ponerle mucho azúcar."
        ],
        answer: 1,
        explanation: "Es el método térmico estándar (ej. leche) que elimina patógenos peligrosos sin cocinar completamente el alimento."
    },
    {
        id: 160,
        question: "¿Qué es la LIOFILIZACIÓN?",
        options: [
            "Un tipo de fritura.",
            "Deshidratación por frío (congelado y vacío).",
            "Cocción a presión.",
            "Un conservante químico."
        ],
        answer: 1,
        explanation: "Es un método de conservación avanzado donde se quita el agua al alimento congelado, manteniendo su estructura."
    },
    {
        id: 161,
        question: "¿Qué efecto tiene el AZÚCAR en altas concentraciones (Almíbar)?",
        options: [
            "Solo endulza.",
            "Actúa como conservante al atrapar el agua disponible (baja la Aw).",
            "Mata bacterias por calor.",
            "Ninguno."
        ],
        answer: 1,
        explanation: "Al igual que la sal, el azúcar en gran cantidad deja a las bacterias sin agua disponible para vivir."
    },
    {
        id: 162,
        question: "¿Existe la esterilización 'casera' segura para conservas?",
        options: [
            "Sí, hirviendo frascos en olla común.",
            "No. La esterilización real requiere autoclaves industriales a 130°C.",
            "Sí, con alcohol.",
            "Sí, al sol."
        ],
        answer: 1,
        explanation: "En casa solo se puede pasteurizar (agua hirviendo a 100°C), lo cual NO mata las esporas del botulismo en conservas neutras."
    },

    // --- INFRAESTRUCTURA Y LIMPIEZA (DETALLES TÉCNICOS) ---
    {
        id: 163,
        question: "¿Con qué frecuencia se deben limpiar las CAMPANAS extractoras?",
        options: [
            "Una vez al año.",
            "Dos veces por semana (mínimo) para evitar acumulación de grasa y riesgo de incendio.",
            "Cuando gotean grasa.",
            "Nunca."
        ],
        answer: 1,
        explanation: "La grasa acumulada en campanas puede gotear sobre la comida (contaminación) o prenderse fuego. (Manual pág. 17)"
    },
    {
        id: 164,
        question: "¿Qué es un BIOFILM?",
        options: [
            "Una película de plástico.",
            "Una capa resistente de microorganismos pegada a superficies mal lavadas.",
            "Un video educativo.",
            "Un detergente."
        ],
        answer: 1,
        explanation: "Los biofilms son colonias de bacterias protegidas por una baba que resiste la limpieza común. Requieren fricción fuerte. (Manual pág. 18)"
    },
    {
        id: 165,
        question: "Los ángulos entre paredes y pisos (zócalos) deben ser...",
        options: [
            "Rectos (90 grados).",
            "Redondeados (sanitarios) para facilitar la limpieza.",
            "De madera.",
            "No importa."
        ],
        answer: 1,
        explanation: "El zócalo sanitario curvo evita que se junte mugre en las esquinas difíciles de limpiar. (Manual pág. 12)"
    },
    {
        id: 166,
        question: "¿Qué indica la presencia de manchas oscuras en techos y paredes?",
        options: [
            "Es decoración.",
            "Presencia de hongos/moho por humedad y mala ventilación.",
            "Que cocinan mucho.",
            "Sombra."
        ],
        answer: 1,
        explanation: "Los hongos en infraestructura pueden liberar esporas al aire y contaminar los alimentos. (Manual pág. 14)"
    },

    // --- TRANSPORTE Y RECEPCIÓN ---
    {
        id: 167,
        question: "Si llega un camión habilitado pero con 'olor a combustible' en la caja:",
        options: [
            "Ventilo la mercadería y la uso.",
            "Rechazo la mercadería por contaminación química.",
            "Lavo los envases.",
            "Solo rechazo lo que no está envasado."
        ],
        answer: 1,
        explanation: "Los alimentos grasos absorben olores químicos rápidamente. Es un riesgo de contaminación química inaceptable. (Manual pág. 38)"
    },
    {
        id: 168,
        question: "¿Dónde debe exhibirse la habilitación en un vehículo de transporte (UTA)?",
        options: [
            "En la guantera.",
            "En el exterior del vehículo, de forma legible.",
            "No hace falta si tiene el logo.",
            "En la casa del dueño."
        ],
        answer: 1,
        explanation: "El número de habilitación debe ser visible para inspección en vía pública. (Manual pág. 38)"
    },
    {
        id: 169,
        question: "Al recibir latas de conserva, ¿cuáles debo rechazar (además de las hinchadas)?",
        options: [
            "Las que tienen etiquetas viejas.",
            "Las abolladas u oxidadas.",
            "Las que pesan mucho.",
            "Las importadas."
        ],
        answer: 1,
        explanation: "Una abolladura, especialmente en los bordes, puede romper el barniz interior y permitir que el metal contamine la comida. (Manual pág. 25)"
    },

    // --- POES Y QUÍMICOS ---
    {
        id: 170,
        question: "¿Qué se debe hacer primero: Limpiar o Desinfectar?",
        options: [
            "Es lo mismo.",
            "Primero Limpiar (sacar lo visible) y luego Desinfectar (matar bacterias).",
            "Primero Desinfectar y luego Limpiar.",
            "Mezclar todo junto."
        ],
        answer: 1,
        explanation: "La suciedad orgánica inactiva los desinfectantes. Si no limpias primero, no desinfectas nada. (Manual pág. 15)"
    },
    {
        id: 171,
        question: "¿Qué temperatura debe tener el agua para desengrasar efectivamente?",
        options: [
            "Fría.",
            "Tibia (20°C).",
            "Caliente (entre 45°C y 55°C) para que actúe el detergente.",
            "Hirviendo (100°C)."
        ],
        answer: 2,
        explanation: "El agua fría solidifica la grasa. Se necesita calor para emulsionarla junto con el detergente. (Manual pág. 18)"
    },
    {
        id: 172,
        question: "El tiempo de contacto del desinfectante con la superficie es...",
        options: [
            "Irrelevante.",
            "Muy importante. Hay que dejarlo actuar el tiempo que diga el fabricante.",
            "Solo 1 segundo.",
            "Toda la noche."
        ],
        answer: 1,
        explanation: "Echar lavandina y secar inmediatamente NO sirve. El químico necesita minutos para matar al microorganismo."
    },

    // --- PLAGAS E INFRAESTRUCTURA ---
    {
        id: 173,
        question: "¿Por qué se deben tapar los desagües y rejillas en la cocina?",
        options: [
            "Para que no salga olor.",
            "Para evitar el ingreso de plagas desde las cañerías.",
            "Para que no se caigan cosas.",
            "Por estética."
        ],
        answer: 1,
        explanation: "Las cucarachas y roedores usan los desagües como autopistas para entrar a la cocina. (Manual pág. 13)"
    },
    {
        id: 174,
        question: "¿Qué tipo de luz atrae MENOS a los insectos en las entradas?",
        options: [
            "Luz blanca intensa.",
            "Luz amarilla.",
            "Luz ultravioleta.",
            "Luz roja."
        ],
        answer: 1,
        explanation: "Se recomienda luz amarilla en entradas de servicio porque atrae menos insectos nocturnos que la blanca. (Manual pág. 21)"
    },
    {
        id: 175,
        question: "¿Qué son los 'signos' de presencia de plagas?",
        options: [
            "Ver al animal vivo.",
            "Excrementos, manchas de grasa en zócalos, envases roídos.",
            "Ruidos de noche.",
            "Todas las anteriores."
        ],
        answer: 3,
        explanation: "No hace falta ver a la rata para saber que está. Los signos confirman la infestación activa. (Manual pág. 20)"
    },

    // --- ENFERMEDADES Y BACTERIAS (NUEVAS) ---
    {
        id: 176,
        question: "¿Qué bacteria (vibrio) se asocia al agua no potable y pescados contaminados?",
        options: [
            "Vibrio cholerae (Cólera).",
            "Salmonella.",
            "Triquinosis.",
            "Botulismo."
        ],
        answer: 0,
        explanation: "El Cólera se transmite principalmente por agua contaminada con materia fecal y alimentos de mar crudos. (Manual pág. 7/9)"
    },
    {
        id: 177,
        question: "La ictericia (piel y ojos amarillos) es síntoma característico de...",
        options: [
            "Botulismo.",
            "Hepatitis A.",
            "Salmonella.",
            "Celiaquía."
        ],
        answer: 1,
        explanation: "La Hepatitis A es un virus que ataca el hígado, provocando este síntoma visible. (Manual pág. 10)"
    },
    {
        id: 178,
        question: "¿Qué son los 'Grupos de Riesgo'?",
        options: [
            "Los cocineros.",
            "Niños, Embarazadas, Ancianos e Inmunodeprimidos.",
            "Los clientes vip.",
            "Los proveedores."
        ],
        answer: 1,
        explanation: "Son las personas cuyo sistema inmune es más débil, por lo que una intoxicación puede ser mortal para ellos. (Manual pág. 5)"
    },

    // --- SITUACIONES DE SERVICIO Y OPERACIÓN ---
    {
        id: 179,
        question: "Si se cae una lata de conservas cerrada al piso y se abolla un poco el borde...",
        options: [
            "La uso igual.",
            "La separo para devolución o descarte (riesgo de micro-fisuras).",
            "La enderezo.",
            "La hiervo."
        ],
        answer: 1,
        explanation: "El golpe puede haber roto el sello hermético invisiblemente. Ante la duda, no se usa."
    },
    {
        id: 180,
        question: "¿Se permite apoyar las bolsas de basura sobre la mesada de trabajo antes de sacarlas?",
        options: [
            "Sí, un ratito.",
            "No. Está prohibido apoyar basura en superficies donde se manipulan alimentos.",
            "Sí, si la bolsa es nueva.",
            "Depende del horario."
        ],
        answer: 1,
        explanation: "La bolsa de basura viene del piso y contiene desechos. Apoyarla en la mesada es contaminación cruzada directa. (Manual pág. 13)"
    },
    {
        id: 181,
        question: "Respecto a los uniformes, ¿por qué se recomienda que NO tengan bolsillos superiores?",
        options: [
            "Por moda.",
            "Para evitar que caigan objetos (lapiceras, monedas) a la comida al agacharse.",
            "Para ahorrar tela.",
            "Para que no roben."
        ],
        answer: 1,
        explanation: "Es una medida de seguridad física para evitar cuerpos extraños en la preparación. (Manual pág. 11)"
    },
    {
        id: 182,
        question: "¿Qué debe hacer si ve personas ajenas (visitantes, técnicos) entrar a la cocina?",
        options: [
            "Nada.",
            "Exigirles vestimenta adecuada (cofia, bata) y control de higiene.",
            "Echarlos.",
            "Pedirles que no toquen nada."
        ],
        answer: 1,
        explanation: "Cualquier persona que ingrese al área de elaboración es un potencial contaminante y debe cumplir las normas BPM."
    },
    {
        id: 183,
        question: "¿Las bebidas se pueden enfriar en la misma hielera que el hielo para tragos?",
        options: [
            "Sí, ahorra espacio.",
            "No. Las botellas están sucias por fuera y contaminan el hielo que se va a consumir.",
            "Sí, si las lavo.",
            "Solo latas."
        ],
        answer: 1,
        explanation: "El hielo para consumo (ingrediente) debe estar separado del hielo usado para refrigerar botellas. (Manual pág. 33)"
    },
    {
        id: 184,
        question: "Si descongelo carne en la heladera, ¿dónde la ubico exactamente?",
        options: [
            "Arriba de todo.",
            "Abajo de todo y en un recipiente profundo que contenga los jugos.",
            "En la puerta.",
            "Sobre las verduras."
        ],
        answer: 1,
        explanation: "La ubicación inferior evita que, si el recipiente rebalsa, la sangre cruda caiga sobre alimentos listos para consumir. (Manual pág. 26)"
    },
    {
        id: 185,
        question: "¿Qué temperatura se recomienda para el agua de lavado de manos?",
        options: [
            "Hirviendo.",
            "Tibia, para ayudar al jabón y cuidar la piel del manipulador.",
            "Helada.",
            "No importa."
        ],
        answer: 1,
        explanation: "Si el agua está helada o hirviendo, el manipulador se lava rápido y mal. La temperatura confortable asegura un buen lavado. (Manual pág. 10)"
    },
    {
        id: 186,
        question: "¿Qué es la 'Contaminación Química'?",
        options: [
            "Bacterias.",
            "Restos de pesticidas, detergente mal enjuagado o metales pesados en la comida.",
            "Un pelo.",
            "Comida quemada."
        ],
        answer: 1,
        explanation: "Es la presencia de sustancias químicas tóxicas, a diferencia de la biológica (bacterias) o física (objetos). (Manual pág. 3)"
    },
    {
        id: 187,
        question: "¿Por qué no se deben usar cajones de madera de la verdulería dentro de la cocina?",
        options: [
            "Son feos.",
            "Son porosos, no se pueden lavar y traen plagas del mercado.",
            "Pesan mucho.",
            "Astillan las manos."
        ],
        answer: 1,
        explanation: "La madera cruda es un vehículo de contaminación. Se debe trasvasar a cajones plásticos limpios al recibir. (Manual pág. 23)"
    },
    {
        id: 188,
        question: "¿Qué es el R.N.P.A.?",
        options: [
            "Registro Nacional de Productores.",
            "Registro Nacional de Producto Alimenticio (el 'DNI' del producto).",
            "Reglamento de Panaderías.",
            "Registro de Plagas."
        ],
        answer: 1,
        explanation: "Es el número único que identifica a un producto alimenticio aprobado en Argentina. (Manual pág. 23)"
    },
    {
        id: 189,
        question: "¿Se puede usar la pileta de lavar platos (bacha) para lavarse las manos?",
        options: [
            "Sí, es agua igual.",
            "No. Debe haber un lavamanos exclusivo. Si no, sanear la pileta antes y después.",
            "Solo si no hay platos.",
            "Es lo ideal."
        ],
        answer: 1,
        explanation: "Lavarse las manos sucias sobre los platos limpios o vegetales es contaminación cruzada. (Manual pág. 14)"
    },
    {
        id: 190,
        question: "¿Qué hacer si el termómetro de recepción marca que los congelados llegaron a -5°C?",
        options: [
            "Aceptarlos y congelar rápido.",
            "Rechazarlos. Deben llegar a -18°C (con tolerancia mínima según producto, pero -5°C es descongelado).",
            "Cocinar todo ya.",
            "Ponerlos en agua."
        ],
        answer: 1,
        explanation: "A -5°C el producto está prácticamente descongelado. Se rompió la cadena de frío y se rechaza. (Manual pág. 22)"
    },
    {
        id: 191,
        question: "¿Las mascotas pueden viajar en la cabina del camión de reparto?",
        options: [
            "Sí, son compañía.",
            "No. El transporte de alimentos debe ser higiénico y libre de animales.",
            "Sí, si van atadas.",
            "Solo gatos."
        ],
        answer: 1,
        explanation: "El vehículo habilitado (UTA) prohíbe la presencia de animales por riesgo de contaminación. (Manual pág. 38)"
    },
    {
        id: 192,
        question: "¿Qué hacemos con los productos 'Vencidos' en el depósito?",
        options: [
            "Los usamos rápido.",
            "Se separan, se identifican como 'NO APTOS' y se eliminan antes de 48hs.",
            "Se borra la fecha.",
            "Se regalan."
        ],
        answer: 1,
        explanation: "No pueden convivir con los aptos por riesgo de uso accidental. Deben segregarse inmediatamente. (Manual pág. 25)"
    },
    {
        id: 193,
        question: "Para sanitizar verduras, ¿la cantidad de lavandina es siempre la misma?",
        options: [
            "Sí, una tapita.",
            "No. Depende de la concentración de la marca (leer rótulo). Generalmente son gotas por litro.",
            "Un chorro.",
            "No se usa lavandina."
        ],
        answer: 1,
        explanation: "Usar 'a ojo' es peligroso (intoxicación química) o inútil (no desinfecta). Se debe seguir la instrucción del fabricante. (Manual pág. 16)"
    },
    {
        id: 194,
        question: "¿Qué significa la sigla E.T.A.?",
        options: [
            "Estación de Transporte.",
            "Enfermedad Transmitida por Alimentos.",
            "Equipo Técnico Alimentario.",
            "Envase Tratado Asépticamente."
        ],
        answer: 1,
        explanation: "Concepto básico: Son las enfermedades causadas por ingerir alimentos o agua contaminados. (Manual pág. 5)"
    },
    {
        id: 195,
        question: "Regla de oro del freezer: ¿Se puede volver a congelar algo descongelado?",
        options: [
            "Sí, siempre.",
            "No, salvo que se haya cocinado en el medio (Crudo -> Descongelado -> Cocido -> Recongelar).",
            "Sí, si huele bien.",
            "Solo verduras."
        ],
        answer: 1,
        explanation: "Al descongelar, las bacterias se multiplican. Si re-congelas crudo, guardas una 'bomba' bacteriana. Al cocinar, 'reseteas' la carga bacteriana. (Manual pág. 27)"
    },
    {
        id: 196,
        question: "Si tengo una herida en la mano y no hay guantes en el local...",
        options: [
            "Trabajo igual con cuidado.",
            "No debo manipular alimentos. Debo ser reasignado a otra tarea o no trabajar.",
            "Me pongo una bolsa.",
            "Uso mucha lavandina."
        ],
        answer: 1,
        explanation: "Una herida sin la protección doble adecuada (impermeable + guante) es una fuente directa de Staphylococcus aureus. (Manual pág. 12)"
    },
    {
        id: 197,
        question: "La carne envasada al vacío tiene color oscuro/púrpura. ¿Es normal?",
        options: [
            "No, está podrida.",
            "Sí, es normal por falta de oxígeno. Al abrir el envase recupera el rojo brillante.",
            "Es carne vieja.",
            "Está quemada."
        ],
        answer: 1,
        explanation: "Es una reacción química de la mioglobina ante la falta de aire. Si al abrir recupera color y huele bien, es segura."
    },
    {
        id: 198,
        question: "¿Qué es el 'Saneamiento' según el manual?",
        options: [
            "Tirar agua.",
            "Los procedimientos de Limpieza + Desinfección + Control de Plagas.",
            "Ventilar el local.",
            "Pintar paredes."
        ],
        answer: 1,
        explanation: "Saneamiento es el concepto integral de higiene (sacar suciedad y matar gérmenes). (Manual pág. 15)"
    },
    {
        id: 199,
        question: "¿Qué es un 'Portador Sano'?",
        options: [
            "Alguien que come sano.",
            "Una persona que tiene gérmenes patógenos, no tiene síntomas, pero contagia.",
            "Un alimento orgánico.",
            "Un inspector."
        ],
        answer: 1,
        explanation: "Es el manipulador más peligroso, porque al sentirse bien, trabaja y contamina sin saberlo (ej. Salmonella, Hepatitis). (Manual pág. 9)"
    },
    {
        id: 200,
        question: "Pregunta final: ¿Cuál es el objetivo principal de las Buenas Prácticas de Manufactura (BPM)?",
        options: [
            "Que la comida sea rica.",
            "Obtener alimentos inocuos, saludables y seguros para el consumidor.",
            "Gastar menos dinero.",
            "Cumplir horario."
        ],
        answer: 1,
        explanation: "Las BPM son los procedimientos necesarios para garantizar que el alimento no enferme a nadie. (Manual pág. 11)"
    }
];
