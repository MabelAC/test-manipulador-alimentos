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
       question: "¿Por qué no se debe dar miel a menores de 1 año?",
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
        question: "Al servir la mesa, ¿cómo se deben tomar los vasos y copas?",
        options: ["Por el borde superior.", "Metiendo los dedos adentro.", "Por la base o el tallo.", "Con la mano completa."],
        answer: 2,
        explanation: "Nunca tocar la zona donde el cliente pondrá la boca."
    }
];