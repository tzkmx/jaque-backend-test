## Soluciones a los ejercicios indicados

En general, para avanzar continuamente ante cualquier cambio, utilicé Test Driven Development, escribiendo primero las pruebas con los casos de entrada que proporcionaron para cumplir con las salidas esperadas. En algunos casos amplié los casos de prueba, como enviando array vacíos, array de un solo elemento, agregando nuevos casos, esperando anticiparme a entradas que corresponden a lo especificado y así corrigiendo el algoritmo para un mayor alcance.

- Realicé la documentación con JSDoc para generar un sitio de pruebas navegable con descripciones generales de las funciones y enlaces pertinentes.
- Las pruebas se hicieron con Jest.
- El estilo se mantiene consistente con ESLint basándome principalmente en Standard, agregando un máximo de complejidad ciclomática a cada función de 5.

### Instrucciones

Para correr las pruebas:

    npm run test
     
Para generar el sitio de documentación:

    nom run doc


### 1. Subarreglo más grande ascendente

Descripción en prueba estilo BDD:

https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/01-ascending-subset/ascendingSubset.test.js#L30

Este ejercicio originalmente lo realicé con un loop for clásico, sin embargo la complejidad del código lo hacía más ilegible, cambiándolo por un reducer que en su "acumulador" va portando precisamente el array más grande encontrado hasta el momento, con el que se está trabajando en caso de haber reiniciado al encontrar un entero menor en alguna interación, y el elemento actual para comparar con el encontrado previamente.

https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/01-ascending-subset/ascendingSubset.js#L25

En este y otros ejercicios prefiero siempre el patrón _early return_ al if/else. Con esto evito que la función continue realizando trabajo innecesario y reduzco los niveles de indentación del código.

### 2. Suma de rango entre 2 enteros.

Descripción en BDD:
https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/02-sum-numbers-range/sumNumbersRange.test.js#L17

La suma se realiza con un simple loop for entre el límite inferior y el superior (inclusive), solo agregué para casos límite el caso donde el límite superior sea el mismo que el inferior, devolviendo entonces solo el número sin iterar ya que no hay a donde avanzar; y lanzando una excepción en caso de parámetros que no hacen sentido como que el límite superior en realidad es un entero menor al límite inferior indicado.

En este y otros ejercicios también prefiero usar excepciones para forzar la atención del integrador a errores en los parámetros de entrada ya que que el uso de lógica para convertir parámetros inválidos a entradas válidas en mi experiencia introduce a menudo errores sutiles difíciles de depurar.

https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/02-sum-numbers-range/sumNumbersRange.js#L16-L18

### 3. Elemento en posición tras ordenar array (descendente).

Descripción BDD:
https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/03-item-at-position-order-array/itemAtPositionOrderedArray.test.js#L16

Utilizo el método sort de arrays con una función para ordenar numéricamente y no por orden de caracteres en caso de arrays de entrada mayores, agregué algunos casos de prueba y casos límite como usar un array vacío de entrada, así como especificar el índice de un elemento buscado mayor que el tamaño del array de entrada.

https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/03-item-at-position-order-array/itemAtPositionOrderedArray.js#L25-L26

### 4. Eliminar duplicados de un array.

Descripción BDD:
https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/04-strip-array-duplicates/stripArrayDuplicates.test.js#L18-L21

Utilizo el objeto nativo Set de ES6 ya que el ejercicio indicaba la entrada solo de array de escalares. Para comparar objetos sería necesario un algoritmo de comparación de todas las propiedades y subpropiedades del objeto, pero el ejercicio no lo indicaba así. En caso de que el ejercicio indicase la limitación de trabajar con ES5 o menor (antes de la disponibilidad del objeto nativo Set), utilizaría una clase Set en userland, ejemplos puede haber muchos pero este ejercicio ya lo realicé en otro momento practicando CoffeeScript: https://gist.github.com/tzkmx/f6cab192b8615711605f sin embargo me pareció innecesario e ineficiente 
utilizarlo al estar trabajando con un Node LTS reciente (12.x)

https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/04-strip-array-duplicates/stripArrayDuplicates.js#L10-L21

### 5. Determinar si expresión está balanceada.

Descripción BDD:
https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/05-balanced-expression/isBalancedExpression.test.js#L14-L19

Utilizo un objeto Map nativo para registrar en cada nivel cual fue carácter de apertura, con una variable rastreando en que nivel estoy buscando su cierre. Tomé en cuenta que la expresión podría ser mayor y no solo incluir los caracteres de brackets, así como más expresiones válidas e inválidas distintas a las descritas en el ejercicio. Estas pruebas me permitieron introducir lógica para manejar casos más amplios y poder adaptar la función a un número mayor de expresiones y caracteres de cierre y apertura.

https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/05-balanced-expression/isBalancedExpression.js#L13-L24

Este es prácticamente el único ejercicio donde documento en el loop principal los branch y sus salidas, ya que en otros ejercicios prefiero que los nombres de variables y la documentación de tipos de parámetros y salidas sea auto explicativa.

### 6. Determinar espacios requeridos para hospedar eventos (clases).

Descripción BDD:
https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/06-venues-booking/venuesBooking.test.js#L5-L10

Este fue el único ejercicio donde vi la necesidad de utilizar clases para encontrar espacios para las clases (;-D). Consideré que de esta manera la lógica quedaría más clara al encapsular en un objeto el registro de los salones requeridos, y para cada salón su registro de los tiempos requeridos y su propia lógica para determinar "colisión" de horarios.

De esta manera además es un poco más eficiente y legible el código al no requerir el copiado de tantas variables sino que cada objeto controla el registro de sus variables internas y solo exponer los métodos requeridos para agendar y consultar disponibilidad y espacios requeridos.

Además de esta manera al ya contemplar no el uso de algoritmos de parseo de datos puros sin mayor relación con "el mundo exterior" sino de manejo de conceptos que expresan dinámicas como tiempos, y recursos, el uso de objetos permite mapear un poco mejor esa relación y "bajarla" al guardado de datos, enlazarla a otros efectos como enviar notificaciones o peticiones a otros servicios, etcétera.

gist:
https://github.com/tzkmx/jaque-backend-test/blob/b2ae9d4c82b821025e5b4a5ba0fda018e561a1b8/src/06-venues-booking/venuesBooking.js#L35-L37
