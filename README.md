## Soluciones a los ejercicios indicados

En general, para avanzar continuamente ante cualquier cambio, utilicé Test Driven Development, escribiendo primero las pruebas con los casos de entrada que proporcionaron para cumplir con las salidas esperadas. En algunos casos amplié los casos de prueba, como enviando array vacíos, array de un solo elemento, agregando nuevos casos, esperando anticiparme a entradas que corresponden a lo especificado y así corrigiendo el algoritmo para un mayor alcance.

Realicé la documentación con JSDoc para generar un sitio de pruebas navegable con descripciones generales de las funciones y enlaces pertinentes. Las pruebas se hicieron con Jest, el estilo se mantiene consistente con ESLint basándome principalmente en Standard, agregando un máximo de complejidad ciclomática a cada función de 10.

### Instrucciones

Para correr las pruebas:

    npm run test
     
Para generar el sitio de documentación:

    nom run doc


### 1. Subarreglo más grande ascendente

Este ejercicio originalmente lo realicé con un loop for clásico, sin embargo la complejidad del código lo hacía más ilegible, cambiándolo por un reducer que en su "acumulador" va portando precisamente el array más grande encontrado hasta el momento, con el que se está trabajando en caso de haber reiniciado al encontrar un entero menor en alguna interación, y el elemento actual para comparar con el encontrado previamente.

En este y otros ejercicios prefiero siempre el patrón _early return_ al if/else. Con esto evito que la función continue realizando trabajo innecesario y reduzco los niveles de indentación del código.

2.
3.
4.
5.
6.
