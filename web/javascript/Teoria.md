
# Javascript ([Regresar al menu](/README.md))

## Indice <a name="indice"></a>

* [Como trabajar en javascript](#ComoTrabajarConJavaScript)
* [Variables](#variables)

### Como trabajar con javascript <a name="ComoTrabajarConJavaScript"></a>([regresar al indice](#indice))

Como ya sabemos, javascript es un lenguaje que complemeta las acciones y diseño de HTML al igual que css, por lo tanto es necesario vinclullar nuestro archivo HTML con el codigo de javascript. Para esto hay dos metodos:

#### Incluirlo dentro del html

Esta opcion consiste en la incluision del codigo javascript dentro del documento HTML con la etiqueta <code><script></script></code>

~~~
    <HTML>
        <HEAD>
        </HEAD> 
        <BODY>
          codigo HTML
          <script>
            codigo
          </script>
        </BODY> 
    </HTML> 
~~~

El codigo javascript se puede poner antes o despues del codigo HTML, la unica diferencia es que dependiendo de la posicion es lo que se ejecutara primero.

Esta practica no es muy recomendable y en cambio se recomienda que el codigo se coloque en un archivo a parte con la extencio .js y con la misma etiqueta.

~~~
    <HTML>
        <HEAD>
        </HEAD> 
        <BODY>
          codigo HTML
          <script src="direccion/del/archivo"></script>
        </BODY> 
    </HTML> 
~~~

Esto se hace con el fin de cargar los elementos del html y css para posteriormente poder manipularlos.

## Variables<a name="ComoTrabajarConJavaScript"></a>

A grandes rasgos una variable es un contenedor que almacena valores de algun tipo. Su sintaxis basica es

~~~
var variable = valor;
~~~

La ventaja de una variables es que el valor siempre puede cambiar dependiendo de la situacion.




