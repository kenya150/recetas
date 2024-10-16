import { Injectable } from '@angular/core';
import { desayunos, ensaladas, ingredientes, ninos, pastas, pasteles } from '../app.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostresService {

  pasos:ingredientes [] =[
    { 
      id: 1,
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/1bc6405c821c74d73962cf9fa32f9518.webp?itok=erYXqFem',
      ingredientes:'1 1/2 Barras de Mantequilla a temperatura ambiente (90 g c/u\n\n-1 Lata de Leche Condensada LA LECHERA®-3 Huevos-1 1/2 Tazas de Harina de trigo-1 Cucharadita de Polvo para hornear-1 1/2 Barras de Chocolate semiamargo fundido (150 g c/u)-3 Envases de Media Crema NESTLÉ® (190 g c/u)-3 Barras de Chocolate semiamargo en trozos (150 g c/u)',
      pasos:'Hornea-1.Horno precalentado a 180 °C.-2.Para el pastel, acrema la mantequilla; agrega la Leche Condensada LA LECHERA®, los huevos, la harina, el polvo para hornear y 1 ½ barras de chocolate fundido. Vierte la preparación en un molde para pastel previamente engrasado y enharinado y llena hasta ¾ partes, hornea a 180 °C por 30 a 40 minutos o hasta que al introducir un palillo salga limpio. Retira del horno y deja enfriar.-Bate-3.Para el betún, calienta la Media Crema NESTLÉ® y las 3 barras de chocolate picado hasta que se funda; retira del fuego y refrigera 2 horas o hasta que esté firme. Bate el betún en una batidora y reserva.-Sirve-4.Desmolda el pastel y corta en tres capas. Coloca un poco de betún en la base, una tapa de pastel, betún y la parte restante de pastel; cubre el pastel con el resto del betún, refrigera por 30 minutos y ofrece.'
    },
    {
      id: 2,
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/02e4685cabf105917fd3fa2cdef2a7c2.jpg?itok=PHj3JwoM',
      ingredientes:'3/4 De taza de aceite de maíz-1 Cucharadita de esencia de vainilla-5 Huevos-1 Taza de Leche Evaporada CARNATION® CLAVEL®-1/2 Taza de azúcar-1 Cucharadita de polvo para hornear-1 1/2 Tazas de harina para hot cakes-1 Lata de Leche Condensada LA LECHERA®-1 1/2 Tazas de Leche Evaporada CARNATION® CLAVEL®-1 Lata de Media Crema NESTLÉ®-1/2 Taza de crema batida-1/2 Taza de fresas desinfectadas y cortadas en cuartos-1/2 Taza de duraznos en almíbar cortados en cuartos-4 Hojas de menta fresca desinfectadas',
      pasos:'Hornea-1.Horno precalentado a 180 °C.-2.Para el pastel, licúa el aceite de maíz con la esencia de vainilla, los huevos, 1 taza de Leche Evaporada CARNATION® CLAVEL®, el azúcar, el polvo para hornear y la harina para hot cakes; vierte en un molde engrasado y enharinado. Hornea a 180 °C de 45 a 50 minutos o hasta que al introducir un palillo este salga limpio.-Licúa-3.Para la mezcla de tres leches, licúa la Leche Condensada LA LECHERA®, 1 ½ tazas de Leche Evaporada CARNATION® CLAVEL® y la Media Crema NESTLÉ®.-Sirve-4.Desmolda el pastel, pica la superficie con un palillo y baña con la mezcla de tres leches; refrigera por 2 horas. Decora con la crema batida, las fresas, los duraznos y las hojas de menta. Ofrece.'
    },
    {
      id: 3,
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/cfc678399c3e6d8d5367979b3e279f69.jpg?itok=FDNcMnZM',
      ingredientes:'1 Lata de Leche Evaporada CARNATION® CLAVEL®-1 Lata de Leche Condensada LA LECHERA®-1 Lata de Media Crema NESTLÉ®-1 Lata de Leche Evaporada CARNATION® CLAVEL® , para el bizcocho-1 Taza de aceite vegetal-5 Huevos-3/4 De taza de azúcar refinada-5 Cucharadas de cocoa-2 Tazas de harina para hot cakes-500 Mililitros de crema para batir-1/3 De taza de azúcar glass-1 Taza de fresas desinfectadas y cortadas en cuartos-1/2 Taza de piña en almíbar cortada en cuartos-200 Gramos de coco rallado-1 Taza de moras azules-1/4 De taza de frambuesas-Hojas de menta desinfectadas para decorar',
      pasos:'Hornea el bizcocho-1.Horno precalentado a 180 °C. Para las 3 leches, mezcla 1 lata de Leche Evaporada CARNATION® CLAVEL®, la Leche Condesada LA LECHERA® y la Media Crema NESTLÉ®, refrigera. Para el bizcocho, licúa 1 lata de Leche Evaporada CARNATION® CLAVEL®, el aceite, los huevos, la azúcar refinada, la cocoa y la harina para hot cakes. Vierte en un molde engrasado y enharinado; hornea a 180 °C de 45 a 50 minutos o hasta que al introducir un palillo éste salga limpio.-Agrega las 3 leches-2.Desmolda el bizcocho, corta a la mitad y baña con la mezcla de las tres leches; deja reposar por 5 minutos.-Decora-3.Para la cobertura, bate la crema con el azúcar glass hasta que doble su volumen. Forma el pastel colocando una mitad de bizcocho como base, unta un poco de la crema; añade las fresas y la piña; coloca la otra mitad del bizcocho. Cubre las paredes y la superficie del pastel con la crema; decora con las moras azules, las frambuesas y las hojas de menta. Refrigera por 1 hora y ofrece.'
    },
    {
      id: 4,
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/d9c0fccbf7e1be95fc921c9eb312ae1c.jpg?itok=fjJZiAKV',
      ingredientes:'1 Lata de Leche Condensada LA LECHERA®-1 Lata de Leche Evaporada CARNATION® CLAVEL®-1/2 Taza de Jugo de limón colado-1 Sobre de grenetina (7 g) hidratada en 1/4 taza de agua y disuelta a baño María-30 Galletas Marías (170 g)-Rodajas de limón-Rodajas de limón amarillo-Hojas de menta',
      pasos:'1.Licúa la Leche Condensada LA LECHERA® y la Leche Evaporada CARNATION® CLAVEL®, con la licuadora encendida agrega poco a poco el jugo de limón y la grenetina previamente disuelta.-Forma la carlota-2.Forra el fondo de un aro de pastelería con papel aluminio y las paredes con acetato, cubre las paredes y el fondo del aro con las galletas y vierte un poco de la mezcla de limón; arma el relleno de la carlota alternando una capa de galleta y una de la mezcla de limón, hasta terminar con los ingredientes.-Enfría y decora-3.Refrigera por 2 horas, desmolda y decora con rodajas de limón y hojas de menta. Ofrece.'
    },
    {
      id: 5,
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/760269826fc636d1d15565492809274d.jpg?itok=FK-9XC4h',
      ingredientes:'2 Huevos-1/2 Taza de harina de trigo-2 Cucharadas de mantequilla-1 Taza de Leche Evaporada CARNATION® CLAVEL® (360 g)-1 Tableta de Chocolate para Mesa ABUELITA-2 Tazas de crema para batir-1/4 De taza de azúcar-1/2 Paquete de queso crema a temperatura ambiente (95 g)-1 Cucharada de esencia de vainilla-1 Taza de frutos rojos',
      pasos:'Prepara las crepas-1.Licúa los huevos con la harina, la mantequilla, la Leche Evaporada CARNATION® CLAVEL® la vainilla y el Chocolate para Mesa ABUELITA®. Vierte un poco de la mezcla en una sartén caliente, extiende para formar la crepa y cocina por ambos lados. Repite esta acción hasta terminar con la masa.-Prepara la crema-2.Bate la crema para batir con el azúcar, la vainilla y el queso crema hasta doblar su volumen.-Forma el pastel-3.Coloca una crepa con un poco de crema montada y repite esta acción hasta terminar con las crepas y la crema. Decora con frutos rojos y sirve.'
    },
    /* ensaladas */
    {
      id: 1.1,
      img:'https://www.fitsalud.com.ar/wp-content/uploads/2016/09/ensalada-quinoa-meditarraneo.jpg',
      ingredientes:'2 Cucharadas de miel de abeja-2-Cucharadas de vinagre balsámico-4 Cucharadas de aceite de oliva-2 Tazas de agua-1 Taza de Quinoa Mediterránea Natures Heart®-1 1/2 Tazas de arúgula baby, desinfectada-1/2 Paquete de queso de cabra, desmoronado (50 g)-1 Taza de fresas, desinfectadas y cortadas en cuartos',
      pasos:'1.Para la vinagreta, licúa la miel, el vinagre y el aceite.-2.Hierve el agua, añade la Quinoa Mediterránea Natures Heart®, tapa y cocina a fuego bajo de 10 a 15 minutos o hasta que el agua se haya consumido por completo.-3.Mezcla la arúgula, el queso de cabra, las fresas, la Quinoa Mediterránea Natures Heart® y la vinagreta; ofrece.'
      },
      {
      id: 2.1,
      img:'https://imag.bonviveur.com/ensalada-de-uvas-nueces-y-queso.jpg',
      ingredientes:'1 Lechuga italiana, desinfectada y troceada-3/4 Taza de uva verde, cortadas a la mitad-1/2 Taza de fresas, desinfectadas y cortadas en cuartos-2 Kiwis, cortados en rodajas-1 Taza de mango, cortado en cubos-1 Taza de sandía, cortada en cubos-1/2 Taza de aceite de oliva-2 Cucharadas de miel de abeja-3 Cucharadas de vinagre balsámico-2 Cucharadas de Jugo MAGGI®-2 Cucharadas de Salsa Inglesa CROSSE & BLACKWELL®',
      pasos:'1.En un recipiente mezcla la lechuga con las uvas, las fresas, el kiwi, el mango y la sandía.-2.Para la vinagreta, licúa el aceite de oliva con la miel, el vinagre balsámico, el Jugo MAGGI® y la Salsa Inglesa CROSSE & BLACKWELL®.-3.Sirve la ensalada y agrega vinagreta al gusto.'
      },
      {
      id: 3.1,
      img:'https://i0.wp.com/mesasanamx.com/wp-content/uploads/2022/07/ENSALDA-THAI-CRUNCHY.jpg?resize=800%2C530&ssl=1',
      ingredientes:'1 Sobre con 4 Hojas con Sazonador MAGGI® JUGOSO AL SARTÉN® con Pimentón-1 Pechuga de pollo cortada en 4 piezas a lo largo, sin hueso y sin piel (150 g c/u)-2 Manzanas rojas cortadas en rebanadas-1 Taza de zanahoria rallada-1 Lechuga romana desinfectada y troceada (150 g)-1/2 Taza de cacahuates tostados-1/2 Paquete de-Galletas SALADITAS® GAMESA® (93 g)',
      pasos:'1.Abre una Hoja con Sazonador MAGGI® JUGOSO AL SARTÉN® con Pimentón, coloca una pechuga, cierra y presiona ligeramente para impregnar las especias.-Cocina-2.Colócala en una sartén sin aceite, precalentada a fuego bajo durante 1 minuto, tapa y asa a fuego bajo de 7 a 8 minutos por cada lado o hasta que esté bien cocida. Retira la hoja y repite el procedimiento con el resto de las pechugas. Córtalas en tiras y reserva.-Prepara la ensalada-3.En un tazón, mezcla el pollo, la manzana, la zanahoria, la lechuga y los cacahuates. Sirve, acompaña con las Galletas SALADITAS® GAMESA® y ofrece.'
      },
      {
      id: 4.1,
      img:'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/427eb6d1fb8e1903124a51380128ac36.jpg',
      ingredientes:'1 Sobre con 4 Hojas con Sazonador MAGGI® JUGOSO AL SARTÉN® con Finas Hierbas-1 Paquete de queso mozzarella cortado en rodajas (226 g)-2 Jitomates cortados en rodajas-1 Cucharada de vinagre balsámico-10 Hojas de albahaca desinfectada-1 Paquete de Galletas SALADITAS® GAMESA® (186 g).',
      pasos:'Prepara el queso-1.Abre una Hoja con Sazonador MAGGI® JUGOSO AL SARTÉN® con Finas Hierbas, coloca un poco del queso y jitomate, cierra y presiona ligeramente para impregnar las especias.-Cocina-2.Colócalo en una sartén sin aceite, precalentada a fuego bajo durante 1 minuto y asa a fuego bajo de 3 a 4 minutos por cada lado. Retira la hoja y repite el procedimiento con el resto de los ingredientes.-Prepara la ensalada-3.Acomoda el queso y el jitomate sobre un plato de forma alterna, decora con el vinagre balsámico y las hojas de albahaca. Acompaña con las Galletas SALADITAS® GAMESA® y ofrece.'
      },
      {
      id: 5.1,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOciBiDn7AJ4MWgT3ZOEL-oeK3an69XUS9A&s',
      ingredientes:'1 lechuga costina grande-1 pechuga de pollo a la plancha cortada en tiras  (opcional)-½ taza de queso parmesano en lonjas o rallado grueso-1 ½ taza de cubos de pan (baguete, ciabatta, marraqueta o el pan que tengan en la casa)-2 cucharadas de aceite de oliva-1 cucharadita de Pimentón Páprika--Aliño:--1 yema de huevo extra grande-2 cucharaditas de mostaza Dijon-2 cucharadas de vinagre-1 cucharadita de limón-½ cucharadita de Ajo en Polvo Gourmet-3 anchoas-¾ taza de aceite de oliva-1 cucharadita de Sal de Mar Gourmet-½ cucharadita de Pimienta Blanca Molida Gourmet.',
      pasos:'Para el aliño, poner todos los ingredientes menos el aceite en una licuadora. Licuar hasta tener una mezcla homogénea. Con la licuadora andando al mínimo, agregar de a poco el aceite de oliva para tener una mezcla emulsionada y espesa. Sazonar con sal de mar gourmet y pimienta blanca molida gourmet.--Calentar el horno a 200°C.--Para los crutones: Mezclar el pan con el aceite de oliva y con el pimentón páprika. Poner el pan en una lata de horno (en una sola capa). Hornear por 3 a 5 minutos o hasta que el pan esté crujiente y dorado.-Poner la lechuga en un plato, rociar con el aliño. Decorar con el pollo, crutones y queso parmesano. Servir inmediatamente.'
      },
      
    /* pastas */
    {
      id: 1.2,
      img:'https://elpetitchef.com/sites/default/files/2020-11/presentacion_227.jpg',
      ingredientes:'Láminas de lasaña: 12-15 láminas (pueden ser precocidas o normales)-Para la salsa de carne:-500 g de carne molida (res, cerdo o pollo)-1 cebolla picada-2 dientes de ajo picados-1 lata (400 g) de tomate triturado o salsa de tomate-2 cucharadas de pasta de tomate (opcional)-1 cucharadita de orégano seco-1 cucharadita de albahaca seca-Sal y pimienta al gusto-Aceite de oliva-Para la salsa bechamel (salsa blanca):-50 g de mantequilla-50 g de harina-500 ml de leche-Sal, pimienta y nuez moscada al gusto-Para el ensamblaje:-250 g de queso ricotta o requesón (opcional)-300 g de queso mozzarella rallado-100 g de queso parmesano rallado',
      pasos:'Preparar la salsa de carne: Sofríe la cebolla y el ajo en aceite de oliva. Agrega la carne y cocina hasta que esté dorada. Añade el tomate triturado, la pasta de tomate y las especias. Cocina a fuego lento durante 20 minutos.--Preparar la salsa bechamel: Derrite la mantequilla en una cacerola, añade la harina y cocina por un par de minutos. Agrega la leche poco a poco, revolviendo constantemente hasta que espese. Sazona con sal, pimienta y nuez moscada.--Ensamblar la lasaña: En un molde para hornear, coloca una capa de salsa de carne, seguida de láminas de lasaña, una capa de salsa bechamel, y una capa de queso. Repite el proceso hasta agotar los ingredientes, terminando con una capa de salsa y queso mozzarella y parmesano.--Hornear: Cocina en el horno precalentado a 180°C durante unos 30-40 minutos, hasta que esté burbujeante y dorada.-Dejar enfriar y servir.'
      },
      {
      id: 2.2,
      img:'https://www.196flavors.com/wp-content/uploads/2020/08/fettuccine-alfredo-1-FP.jpeg',
      ingredientes:'1/2 paquete fettuccine de tu preferencia-400 g queso parmesano rallado-4 cds mantequilla-500 g crema ácida-1/4 taza leche-200 g perejil-700 g pechuga de pollo-c/n sal',
      pasos:'Cocer la pasta en agua hirviendo con sal de 8 a 12 minutos hasta que su consistencia sea al dente--2.-En un recipiente aparte, derretir la mantequilla y la crema con movimientos continuos para ir agregando poco a poco el queso parmesano.-3-Agregar a la mezcla de queso la leche para crear una crema y no espese demasiado y dejar que hierva.-4-Asar el pollo a la parrilla o en un sartén y cortarlo en pequeños trozos o en tiras según sea tu preferencia.-5-Añadir a la mezcla de queso la pasta ya colada y revolverla.-6-Para servir, colocar en el plato una porción de pasta con trozos de pollo encima y decorar con el perejil fileteado.---Nota: El perejil puede freírse o servirse al natural.--'
      },
      {
      id: 3.2,
      img:'https://jetextramar.com/wp-content/uploads/2021/10/receta-de-mini-ravioli-Jet-Extramar.jpg',
      ingredientes:'300 g de sémola de trigo duro-1 cucharadita de sal-5 cucharadas de aceite de Oliva-150 ml de agua-1 cebolla-1 diente de ajo-300 g de espinacas-100 ml caldo de verduras-100 g de queso parmesano-250 g de ricota-Un poco de harina para trabajar y extender la masa-Perejil-150 g de mantequilla-Film transparente Albal®',
      pasos:'Para la masa de los raviolis, colocar la sémola de trigo duro en un bol y mezclarlo con la cucharadita de sal. Añadir 2 cucharadas de aceite de oliva y 150 ml de agua fría y amasar con la batidora eléctrica durante 1 minuto hasta obtener una masa suave. Formar una bola y untarla con una cucharada de aceite de oliva, luego envolverla en el film transparente Albal®. Dejar reposar por lo menos 1,5 horas (la masa también puede prepararse la noche anterior).--Mientras tanto, pelar y cortar finamente la cebolla y el ajo. Lavar y secar la espinaca.--Calentar 2 cucharadas de aceite de oliva en una sartén. Freír la cebolla a fuego medio durante unos 2 minutos. Añadir el ajo. Añadir el caldo y desglasar (dejar que se cocine a fuego lento durante 2 minutos hasta que el líquido se haya evaporado).  Añadir las espinacas y saltearlas hasta que queden tiernas.  Pasarlas a un bol y dejarlas enfriar completamente.--Una vez las espinacas estén frías, escurrirlas bien en un tamiz, presionando para quitar el líquido. Cortar las espinacas y colocarlas en un bol. Rallar finamente 50 g de queso parmesano y añadir a las espinacas junto con el ricota. Sazonar con sal y pimienta y mezclar bien.  Cubrir el tazón con film transparente Albal® y refrigerar hasta que se vaya a utilizar.--Amasar la masa de la pasta con las manos enharinadas sobre una superficie de trabajo ligeramente enharinado hasta que quede suave y elástica. Luego extenderla y estirarla muy finamente (casi traslúcida) con el rodillo. Recortar círculos con un vaso (por ejemplo, un vaso de vino con un diámetro de aprox. 5cm). Coger el preparado de espinacas y ricota y poner una cucharadita en cada mitad de los círculos de masa.  Dejar aproximadamente un 1 cm del borde libre y humedecerlo con un poco de agua.  Colocar un segundo círculo encima y presionar los bordes con un tenedor, intentar que no quede aire entre los dos raviolis.  Ir colocando los raviolis rellenos en una superficie bien enharinada y cubrirlos con un paño hasta que se vayan a utilizar.--Lavar, secar y cortar finamente el manojo de perejil. Rallar el resto del queso parmesano. Derretir la mantequilla en una sartén a fuego medio y dejarla dorar. Este proceso lleva unos 5 minutos.--Mientras tanto, poner a hervir agua con sal. Una vez el agua haya hervido, introducir los raviolis rellenos y dejarlos durante unos 2-3 minutos a fuego medio. Pasado este tiempo sacar y escurrir. Colocar los raviolis en un plato, rociar con la mantequilla dorada y espolvorear con el parmesano rallado y el perejil picado.'
      },
      {
      id: 4.2,
      img:'https://assets.unileversolutions.com/recipes-v2/232058.jpg',
      ingredientes:'1 paquete rigatoni de 450-500 gr-1 litro salsa marinara-Salsa marinara (básica de tomate)-250 gr requesón-600 gr mezcla de quesos rallados (compré el que trae parmesano, provolone, mozzarella y romano)',
      pasos:'Preparar con anticipación la salsa marinara. Puede usarse comprada, pero siempre queda mejor con la hecha en casa. Revolver bien la salsa con el requesón.--Cocer la pasta de acuerdo con las instrucciones del paquete, verificar que quede al dente. En un tazón suficientemente amplio, mezclar la pasta con la salsa. Vaciar la mitad de la mezcla de pasta a un refractario grande engrasado, el mío mide 35x24 cm.--Distribuir la tercera parte del queso rallado sobre la pasta. Vaciar el resto de la pasta encima y cubrir con el resto del queso rallado, a que quede una capa gruesa. Cubrir con papel aluminio.--Ya cerca de la hora de servir, meter a horno precalentado a 190°C por 20 minutos. Quitar el papel aluminio y dejar a que dore, entre 10 y 15 minutos más.'
      },
      {
      id: 5.2,
      img:'https://imag.bonviveur.com/tortellini-de-carne-con-queso.jpg',
      ingredientes:'Ingredientes para 4 personas--1 paquete de Tortellini de Queso & Espinaca Barilla® tamaño familiar1 frasco de Salsa de Tomate & Albahaca Barilla®¾ de taza de crema para batir espesa4 hojas de albahaca fresca picada½ taza de queso Parmesano-Reggiano rallado.',
      pasos:'Calienta la Salsa de Tomate y Albahaca con la crema en una cacerola pequeña a fuego medio, removiendo con frecuencia hasta que esté muy caliente y burbujee; alrededor de 5 minutos.--Cocina el Tortellini con Queso y Espinaca siguiendo las instrucciones del empaque. Escurre y mezcla con la salsa.'
      },      
    /*niñosss */
    {
      id: 1.3,
      img:'https://laroussecocina.mx/wp-content/uploads/2018/01/galletas-de-avena-001-larousse-cocina-1.jpg',
      ingredientes:'1 taza de avena (puede ser avena tradicional o instantánea)-1/2 taza de harina (puede ser de trigo, integral o de avena)-1/2 taza de azúcar (puedes usar azúcar moreno o miel)-1/4 taza de mantequilla (derretida o a temperatura ambiente)-1 huevo-1/2 cucharadita de bicarbonato de sodio-1/2 cucharadita de canela (opcional)-1/4 cucharadita de sal-1/2 taza de chispas de chocolate (opcional)--Frutos secos o frutas deshidratadas (opcional)',
      pasos: 'Precalienta el horno a 180 °C (350 °F).-Mezcla los ingredientes secos en un bol grande.-En otro bol, bate el huevo y mezcla con la mantequilla y el azúcar.-Combina ambas mezclas y agrega los ingredientes opcionales.-Forma pequeñas bolitas y colócalas en una bandeja para hornear.-Hornea durante 10-12 minutos o hasta que estén doradas.'
      },
      {
      id: 2.3,
      img:'https://images.kglobalservices.com/www.kelloggs.com.mx/es_mx/recipe/recipe_1270035/recip_img-1323203_malteada-fresa-specialk-thumb.jpg',
      ingredientes:'1 taza de fresas frescas (puedes usar fresas congeladas si lo prefieres)-1/2 taza de helado de vainilla (o el sabor que prefieras)-1/2 taza de leche (puedes ajustar la cantidad según la consistencia deseada)-1-2 cucharadas de azúcar (opcional, dependiendo de lo dulce que desees)-Unas gotas de extracto de vainilla (opcional, para realzar el sabor)',
      pasos:'Lava y corta las fresas.-En una licuadora, combina las fresas, el helado, la leche, el azúcar y el extracto de vainilla.-Mezcla hasta obtener una textura suave y cremosa.-Sirve en un vaso y decora con una fresa o un poco de crema batida si lo deseas.'
      },
      {
      id: 3.3,
      img:'https://i.pinimg.com/originals/19/c8/59/19c859c9d8acd13b98f5385bdbd900ff.png',
      ingredientes:'Yogur natural o griego (puedes elegir desnatado o entero)-Frutas frescas:---Plátano (banano) en rodajas-Fresas, en mitades o en cuartos-Arándanos-Frambuesas-Kiwi en rodajas-Mango en cubos-Mix de frutos secos-Almendras-Nueces-Avellanas-Pistachos (sin sal)-Semillas de chía o linaza (opcional)-Endulzantes (opcional)-Miel-Jarabe de arce-Azúcar de coco-Extras (opcional)-Copos de avena-Coco rallado-Canela en polvo',
      pasos: 'Base de yogur: Coloca el yogur en un tazón.-Agregar frutas: Añade las frutas frescas que más te gusten.-Añadir frutos secos: Espolvorea el mix de frutos secos por encima.-Endulzar (opcional): Si lo deseas, añade un poco de miel o jarabe de arce.-Extras (opcional): Finaliza con copos de avena, coco rallado o una pizca de canela.'
      },
      {
      id: 4.3,
      img:'https://blog.pizcadesabor.com/wp-content/uploads/2023/01/Tiras-de-pollo-3-500x375.jpg',
      ingredientes: 'Para las tiras de pollo:-500 g de pechuga de pollo (cortada en tiras)-1 taza de pan rallado (puedes usar panko para más crujiente)-1/2 taza de harina de trigo-2 huevos (batidos)-1 cucharadita de ajo en polvo-1 cucharadita de paprika (opcional)-Sal y pimienta al gusto-Aceite para freír (o spray antiadherente si horneas)-Para el dip de honey mustard:-1/4 de taza de mostaza amarilla-1/4 de taza de miel-1 cucharada de mayonesa (opcional, para cremosidad)-Un chorrito de vinagre (opcional, para un toque ácido).',
      pasos:'Preparar las tiras de pollo: Reboza las tiras en harina, luego en huevo batido y finalmente en pan rallado.-Cocinar: Fríe las tiras en aceite caliente hasta que estén doradas y cocidas por dentro, o hornéalas a 200 °C por 15-20 minutos.-Mezclar el dip: Combina todos los ingredientes del dip hasta que estén bien integrados.-Servir: Disfruta las tiras de pollo con el dip de honey mustard.'
      },
      {
      id: 5.3,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRVp_KGaVnV8qHaoz9vXLDB6wbqg-yPmWFQ&s',
      ingredientes:'Para la base:-1 1/2 tazas de galletas tipo María (o galletas de tu elección)-1/2 taza de mantequilla derretida-1/4 de taza de azúcar (opcional)---Para el relleno:---2 mangos maduros (pelados y picados)-1/2 taza de azúcar (ajusta al gusto)-1/4 de taza de jugo de limón fresco-1 cucharadita de ralladura de limón-2 huevos-1 taza de crema (puede ser crema para batir o crema agria)-1 cucharadita de esencia de vainilla (opcional)-Para la decoración (opcional):-Rodajas de mango-Ralladura de limón-Hojas de menta.',
      pasos: 'Preparar la base: Mezcla las galletas trituradas con la mantequilla derretida y el azúcar.-Presiona la mezcla en el fondo de un molde para pay. Hornea a 180°C por unos 10 minutos y deja enfriar.-Hacer el relleno: Si usas gelatina, hidrátala en el agua caliente y déjala enfriar un poco.-Mezcla la pulpa de mango, la leche condensada, el jugo y la ralladura de limón. Agrega la gelatina disuelta (si la usas).-Montar el pay: Vierte la mezcla de mango sobre la base enfriada y refrigera por al menos 4 horas, o hasta que esté firme.Decorar y servir: Decora con rodajas de mango, crema batida y hojas de menta si lo deseas.'
      },
      /*Desayunoo */
      {
        id: 1.4,
        img:'https://i.ytimg.com/vi/3xOrpMEc6Zk/maxresdefault.jpg',
        ingredientes:'3 Tazas de agua-1/2 Cucharadita de sal-2 Plátanos machos, medianos cortados en cuartos-1/2 Taza de harina de trigo, pasada por un colador-Aceite en aerosol-200 Gramos de queso panela, cortado en rebanadas-1 Envase de Leche-Condensada LA LECHERA® Sirve Fácil',
        pasos:'1.Hierve el agua con la sal, agrega los plátanos y cocina por 15 minutos, escurre; deja enfriar y refrigera por 1 hora.--2.Cubre los plátanos con la harina, sacude ligeramente para retirar el exceso de harina y reserva.-3.Rocía un poco de aceite en la waflera, coloca un pedazo de plátano, queso y otro pedazo de plátano, cierra y cocina por 2 minutos. Retira de la waflera y repite con el resto de los ingredientes. Sirve con la Leche Condensada LA LECHERA® Sirve Fácil. Ofrece.'
        },
        {
        id: 2.4,
        img:'https://cheffitness.wordpress.com/wp-content/uploads/2020/06/15924908870071218462249833229887.jpg?w=1000',
        ingredientes:'3/4 Taza de Leche Evaporada CARNATION® CLAVEL®-1 Cucharada de cocoa, en polvo-1 Cucharada de Café 100% Puro Soluble NESCAFÉ® CLÁSICO®-1 Huevo-1 Cucharada de esencia de vainilla-1/2 Barra de mantequilla (45 g) (45 g)-8 Rebanadas de pan de caja-2 Tazas de yogurt griego, natural-1/4 Taza de Leche Condensada LA LECHERA®-1 Cucharada de cocoa, en polvo-2 Tazas de frutos rojos-8 Hojas de menta, desinfectada',
        pasos:'1.Mezcla la Leche Evaporada CARNATION® CLAVEL®, 1 cucharada de cocoa, ½ cucharada de Café 100% Puro Soluble NESCAFÉ® CLÁSICO®, el huevo y la esencia de vainilla, bate hasta integrar por completo.-2.En una sartén caliente, funde un poco de mantequilla, humedece una rebanada de pan con la mezcla anterior y cocina por ambos lados hasta que dore ligeramente; repite con el resto de los ingredientes.-3.Mezcla el yogurt con la Leche Condensada LA LECHERA®, la cocoa y ½ cucharada de Café 100% Puro Soluble NESCAFÉ® CLÁSICO®. Sirve una rebanada de pan, agrega un poco de la preparación de yogurt, añade otra rebanada de pan un poco más de yogurt, decora con un poco más de cocoa y repite el procedimiento con el resto de los ingredientes. Decora con los frutos rojos y la menta; ofrece.'
        },
        {
        id: 3.4,
        img:'https://successiblelife.com/wp-content/uploads/2024/01/chilaquilesverdes.webp',
        ingredientes:'600 Gramos de tomates verdes cocidos-1/4 De pieza de cebolla mediana, cocida-2 Dientes de ajo cocidos-2 Chiles serrano cocidos-1 1/2 Tazas de agua-5 Ramas de cilantro desinfectado-1 1/2 Cucharadas de consomé de pollo en polvo-1 Cucharada de aceite vegetal-1 Bolsa de totopos (350 g)-1 Pechuga de pollo cocida y deshebrada (500 g)-1 Envase de Media Crema NESTLÉ® refrigerada (190 g)-200 Gramos de queso fresco desmoronado.',
        pasos:'Prepara la salsa--1.Para la salsa, licúa los tomates con la cebolla, los ajos, los chiles, el agua, el cilantro y el consomé de pollo. Calienta el aceite, vierte lo que licuaste y cocina hasta que hierva moviendo ocasionalmente.--Mezcla con los totopos--2.Agrega los totopos a la salsa y mezcla suavemente para que absorban un poco de salsa.--Prepara tus chilaquiles--3.Sirve los chilaquiles y baña con un poco más de salsa. Añade el pollo, la Media Crema NESTLÉ® y el queso. Ofrece.'
        },
        {
        id: 4.4,
        img:'https://storage.googleapis.com/avena-recipes/agtzfmF2ZW5hLWJvdHIZCxIMSW50ZXJjb21Vc2VyGICAgICa8YQKDA/21-01-2020/1579643757299.jpeg',
        ingredientes:'3 Cucharadas de Producto Lácteo Combinado NESTLÉ® NUTRI RINDES®-200 Mililitros de agua-2 Tazas de avena molida-2 Huevos-2 Plátanos maduros-1/2 Taza de agua-1 Cucharadita de canela molida-10 Gramos Aceite en aerosol-1 Manzana-Hojas de menta desinfectadas.',
        pasos:'Prepara tu bebida--1.Mezcla en un vaso el Producto Combinado Lácteo NESTLÉ® NUTRI RINDES® con el agua y reserva.--Prepara los hot cakes--2.Licúa la avena con los huevos, los plátanos, el agua y la canela. Rocía un poco de aceite en aerosol en una sartén caliente, vierte la mezcla con los cubos de manzana encima y asa los hot cakes por ambos lados.--3.Decora con un poco más de manzana y una hoja de menta, acompaña con el Producto Combinado Lácteo NESTLÉ® NUTRI RINDES®.'
        },
        {
        id: 5.4,
        img:'https://hellomatcha.mx/cdn/shop/products/G03-5_530x@2x.png?v=1595261777',
        ingredientes:'1/4 De taza de mostaza-1/4 De taza de mayonesa-1/2 Envase de Media Crema NESTLÉ®-1/4 De pieza de lechuga romana desinfectada y fileteada-1 Baguette-2 Rebanadas de queso tipo manchego-2 Rebanadas de queso cheddar-3 Rebanadas de pechuga de pavo-100 Gramos de salami-8 Rodajas de pepinillos-4 Rodajas de cebolla morada.',
        pasos:'Prepara el aderezo--1.En un tazón mezcla la mostaza con la mayonesa, la MEDIA CREMA NESTLÉ® y la lechuga. Reserva.--Arma el sándwich--2.Corta la baguette a lo largo y agrega queso tipo manchego, queso cheddar, pechuga de pavo y salami. Hornea a 160 °C de 5 a 8 minutos para derretir el queso.--Agrega aderezo y complementos--3.Termina el sándwich con el aderezo, los pepinillos y cebolla. Corta en 4 partes y ofrece al momento.'
        },
        
  ]

  pastel :pasteles []= [
    {
      id: 1,
      title:'Pastel Sencillo de Chocolate',
      frase:'Cada rebanada de pastel es un trocito de celebración en cada bocado.',
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/1bc6405c821c74d73962cf9fa32f9518.webp?itok=erYXqFem'
      },
    {
      id: 2,
      title:'Pastel Tres Leches',
      frase:'Los problemas son como pasteles: se deshacen con un poco de dulce.',
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/02e4685cabf105917fd3fa2cdef2a7c2.jpg?itok=PHj3JwoM'
    },
    {
    id: 3,
    title:'Pastel Choco Coco',
    frase:'Un pastel sin velas es como un cumpleaños sin sonrisas',
    img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/cfc678399c3e6d8d5367979b3e279f69.jpg?itok=FDNcMnZM'
    },
    {
    id: 4,
    title:'Pastel Carlota de Limón',
    frase:'A veces, un buen pastel es la mejor terapia.         k',
    img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/d9c0fccbf7e1be95fc921c9eb312ae1c.jpg?itok=fjJZiAKV'
    },
    {
      id: 5,
      title:'Pastel de Crepas de Chocolate',
      frase:'a felicidad es un pastel bien decorado.              ',
      img:'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/760269826fc636d1d15565492809274d.jpg?itok=FK-9XC4h'
      }
  ];

  ensalada :ensaladas []= [
    {
      id: 1.1,
      img:'https://www.fitsalud.com.ar/wp-content/uploads/2016/09/ensalada-quinoa-meditarraneo.jpg',
      title:'Ensalada de Quinoa Mediterránea',
      frase:'Una ensalada al día mantiene lejos al aburrimiento.'
      },
      {
      id: 2.1,
      img:'https://imag.bonviveur.com/ensalada-de-uvas-nueces-y-queso.jpg',
      title:'Ensalada de Uva Tropical Basica',
      frase:'Ensalada: la forma más deliciosa de comer tus colores.'
      
      },
      {
      id: 3.1,
      img:'https://i0.wp.com/mesasanamx.com/wp-content/uploads/2022/07/ENSALDA-THAI-CRUNCHY.jpg?resize=800%2C530&ssl=1',
      title: 'Ensalada de Pollo con Cacahuates',
      frase: 'Las ensaladas son el abrazo que le das a tu cuerpo.'
      },
      {
      id: 4.1,
      img:'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/427eb6d1fb8e1903124a51380128ac36.jpg',
      title: 'Ensalada de Quesos a las Finas Hierbas',
      frase: 'Siempre hay un motivo para ensaladar: ¡la salud nunca fue tan sabrosa!'
      },
      {
      id: 5.1,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOciBiDn7AJ4MWgT3ZOEL-oeK3an69XUS9A&s',
      title:'Ensalada César',
      frase:'Una buena ensalada es como una buena amistad: llena de sabor y sorpresas.'
    }
      
  ];

  pasta :pastas []=[
    {
      id: 1.2,
      img:'https://elpetitchef.com/sites/default/files/2020-11/presentacion_227.jpg',
      title:'Lasaña',
      frase:'La pasta es el lienzo, ¡tú eres el artista!'
      },
      {
      id: 2.2,
      img:'https://www.196flavors.com/wp-content/uploads/2020/08/fettuccine-alfredo-1-FP.jpeg',
      title:'Fetuccine',
      frase:'La vida es demasiado corta para comer pasta mala.'
      },
      {
      id: 3.2,
      img:'https://jetextramar.com/wp-content/uploads/2021/10/receta-de-mini-ravioli-Jet-Extramar.jpg',
      title:'Raviolis',
      frase:'Un buen plato de pasta es una obra maestra en cada mesa.'
      },
      {
      id: 4.2,
      img:'https://assets.unileversolutions.com/recipes-v2/232058.jpg',
      title:'Rigatoni',
      frase:'La pasta es el amor que se cocina con pasión.'
      },
      {
      id: 5.2,
      img:'https://imag.bonviveur.com/tortellini-de-carne-con-queso.jpg',
      title:'Tortellini',
      frase:'La vida es demasiado corta para comer pasta mala'
      }
  ];

  desayuno: desayunos []=[
    {
      id: 1.4,
      img:'https://i.ytimg.com/vi/3xOrpMEc6Zk/maxresdefault.jpg',
      title:'Waffles de Plátano',
      frase:'Cada bocado es una sonrisa al despertar.'
      },
      {
      id: 2.4,
      img:'https://cheffitness.wordpress.com/wp-content/uploads/2020/06/15924908870071218462249833229887.jpg?w=1000',
      title:'Pan Francés con Tiramisú',
      frase:'El desayuno es la clave para un día exitoso.'
      },
      {
      id: 3.4,
      img:'https://successiblelife.com/wp-content/uploads/2024/01/chilaquilesverdes.webp',
      title:'Chilaquiles Verdes',
      frase:'Empieza el día con energía y sabor.'
      },
      {
      id: 4.4,
      img:'https://storage.googleapis.com/avena-recipes/agtzfmF2ZW5hLWJvdHIZCxIMSW50ZXJjb21Vc2VyGICAgICa8YQKDA/21-01-2020/1579643757299.jpeg',
      title:'Hot Cakes de Avena y Manzanas',
      frase:'Día perfecto comienza con un buen desayuno.'
      },
      {
      id: 5.4,
      img:'https://hellomatcha.mx/cdn/shop/products/G03-5_530x@2x.png?v=1595261777',
      title:'Sandwich de Carnes Frías y Quesos',
      frase:'Despierta tus sentidos con un desayuno delicioso.'
      }      
  ];

  nino :ninos []=[
    {
      id: 1.3,
      img:'https://laroussecocina.mx/wp-content/uploads/2018/01/galletas-de-avena-001-larousse-cocina-1.jpg',
      title:'Galleta de Avena',
      frase:'¡Dale un mordisco a la felicidad!'
      },
      {
      id: 2.3,
      img:'https://images.kglobalservices.com/www.kelloggs.com.mx/es_mx/recipe/recipe_1270035/recip_img-1323203_malteada-fresa-specialk-thumb.jpg',
      title:'Malteada de Fresa',
      frase:'¡Despierta con alegría y sabor!'
      },
      {
      id: 3.3,
      img:'https://i.pinimg.com/originals/19/c8/59/19c859c9d8acd13b98f5385bdbd900ff.png',
      title:'Bowl de Yogur con Fruta y Mix de Frutos Secos',
      frase:'¡Cada bocado es un cuento delicioso!'
      },
      {
      id: 4.3,
      img:'https://blog.pizcadesabor.com/wp-content/uploads/2023/01/Tiras-de-pollo-3-500x375.jpg',
      title:'Tiras de Pollo con Dip Honey Mustard',
      frase:'¡Empieza tu día como un campeón! '
      },
      {
      id: 5.3,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRVp_KGaVnV8qHaoz9vXLDB6wbqg-yPmWFQ&s',
      title:'Pay de Mango y Limón',
      frase:'¡Desayunos que te llenan de energía para jugar!'
      }
  ]

  getingre(){ 
    return this.pasos;
  }

  getsongs(){
    return this.pastel;
  }

  getensa(){
    return this.ensalada;
  }

  getpas(){
    return this.pasta;
  }

  getdesa(){
    return this.desayuno;
  } 

  getnino(){
    return this.nino;
  }

  getsongbyid(id:number){
    const ID =Number(id);
    return this.pastel.find(pasteles => pasteles.id === ID);
  }
  getensabyid(id:number){
    const ID =Number(id);
    return this.ensalada.find(ensaladas => ensaladas.id === ID);
  }

  getpastaid(id:number){
    const ID = Number(id);
    return this.pasta.find(pasta => pasta.id === ID);
  }
  getninoid(id:number){
    const ID=Number(id);
    return this.nino.find(nino => nino.id === ID);
  }
  getdesaid(id:number){
    const ID =Number(id);
    return this.desayuno.find(desayuno => desayuno.id === ID);
  }
  getIngredientesByPastelId(id: number) {
    console.log('Buscando pastel con ID:', id);
    console.log('Buscando Ensalada con id:', id);
    console.log('buscando pasta con id: ',id);
    console.log('buscando nino con id: ',id);
    console.log('buscando desayuno con id: ',id);

    const pastel = this.pastel.find(p => p.id === id);
    const ensalada = this.ensalada.find(e => e.id === id);
    const pasta =this.pasta.find(s => s.id === id);
    const nino= this.nino.find(n => n.id === id);
    const desayuno = this.desayuno.find(d => d.id === id);

    console.log('Pastel encontrado:', pastel);
    console.log('ensalada encontrada: ',ensalada);
    console.log('pasta encontrada: ',pasta);
    console.log('nino encontrado: ',nino);
    console.log('desayuno encontrado',desayuno);
  
    if (pastel) {
      const ingredientes = this.pasos.find(ing => ing.id === pastel.id);
      console.log('Ingredientes encontrados:', ingredientes);
      return ingredientes; // Devuelve los ingredientes encontrados
    }
    if (ensalada){
      const ingredientes = this.pasos.find(ing => ing.id === ensalada.id);
      console.log('ingrediente encontrado: ',ingredientes);
      return ingredientes;
    }
    if (pasta){
      const ingredientes = this.pasos.find(ing => ing.id === pasta.id);
      console.log('ingredientes encontrados: ',ingredientes);
      return ingredientes
    }
    if (nino){
      const ingredientes = this.pasos.find(ing => ing.id === nino.id);
      console.log('ingredientes encontrados: ', ingredientes);
      return ingredientes
    }
    if (desayuno){
      const ingredientes = this.pasos.find(ing => ing.id === desayuno.id);
      console.log('ingrediente encontrado: ',ingredientes);
      return ingredientes
    }
    return undefined; // Devuelve undefined si no se encuentra
  }

  constructor() { }
}
