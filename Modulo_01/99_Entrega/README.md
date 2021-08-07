# Modulo 1: Introducción 

## 01.- Instalación de Visual Studio Code
Paso no realizado dado que estaba previamente en mi PC.

## 02.- Instalación de Node.JS
En mi equipo esta instalada la versión 12.18.3, suficiente para realizar este bootcamp, por lo que mantengo dicha versión.

## 03.- Instalación de lite-server

* Validamos que npm está instalado: ```npm --version``` => 6.14.16, versión adecuada para seguir el curso.

* Instalamos paquete:  ```npm i -g lite-server```

Al crear el ejercicio validamos que la instalación se ha realizado correctamente.
Por un conflicto con la asignación de mi host, el servidor no funciona en localhost:3000, tal y conmo se abre la ventana, pero funciona sin problemas como 127.0.0.1:3000. Lo dejo estar.

## 04.- Interacción con el DOM / JavaScript

### 04.1.- Crear una estructura básica de HTML.

Desde dentro de VS Code creamos un nuevo fichero HTML ./index.html
Agregamos una estructura HTML básica (recordad, escribimos html:5 y presionamos intro).

*./index.html*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Datos de usuario</title>
  </head>

  <body></body>
</html>
```

Agregamos los contenedores genéricos para estructurar nuestra página.

*./index.html*
```html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Datos de usuario</title>
  </head>

  <body>
    <!-- diff -->
    <div class="container">
      <div class="img"></div>
      <div class="data"></div>
    </div>
    <!-- diff -->
  </body>
</html>
```

Ahora vamos a crear dos cajas de texto con etiquetas para rellenarlas.

*./index.html*
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Datos de usuario</title>
  </head>

  <body>
    <div class="container">
      <div class="img"></div>
      <div class="data">
        <!-- diff -->
        <label for="name"><b>Name</b></label>
        <input type="text" id="name" name="name" />

        <label for="lastName"><b>Last name</b></label>
        <input type="text" id="lastName" name="lastName" />
        <!-- diff -->
      </div>
    </div>
  </body>
</html>

```
### 04.2.- Creamos los estilos de la página.

* Estrucutramos la carpeta para separar esos ficheros en un carpta denominada **css**
* Añadimos en esta carpeta el fichero de estilos **site.css**
* Enlazaos los estilo con la página **index.html**

***Resultado***

*./css/site.css*

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}

input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0 32px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.container {
    margin: auto;
    width: 50%;
}

.data {
    padding: 16px;
}

```

*./index.html*
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/site.css" />
    <title>Datos de Usuario</title>
</head>
<body>
    <div class="container">
        <div class="img"></div>
        <div class="data">
            <label for="name"><b>Name</b></label>
            <input type="text" id="name" name="name" />
            
            <label for="lastName"><b>Last Name</b></label>
            <input type="text" id="lastName" name="latName" />

        </div>
    </div>
</body>
</html>
```

### 04.3.- Agregando interacción al HTML con JavaScript

* Creamos una carpeta para organizar todos los ficheros javascript: **js**
* Añadimos en dicha carpeta el fichero **demo.js**
* Enlazamos dicho archivo con el documento HTML.

*./js/demo.js*
```js
document.getElementById("name").value = "Mi nombre";
document.getElementById("lastName").value = "Mi apellido";
```

*./index.html*
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/site.css" />
    <title>Datos de Usuario</title>
</head>
<body>
    <div class="container">
        <div class="img"></div>
        <div class="data">

            <label for="name"><b>Name</b></label>
            <input type="text" id="name" name="name" />
            
            <label for="lastName"><b>Last Name</b></label>
            <input type="text" id="lastName" name="latName" />

        </div>
    </div>

    <script src="js/demo.js"></script>
</body>
</html>
```

### 04.4.- Insertar una imagen en nuestro formulario
* Buscamos imagen para añadir el avatar: [unDraw](https://undraw.co/search)
* Creamos una nueva carpeta para contener las imagenes **img**
* Agregamos la imagen descargada en esta carpeta.
* Editamos ```index.html``` para visualizar esta imagen, agregando una etiqueta ```ìmg``` con sus correspondientes estilos y cargandola desde el archivo JavaScript.

*./index.html*
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/site.css" />
    <title>Datos de Usuario</title>
</head>
<body>
    <div class="container">
        <div class="img">
            <img src="" id="avatar" alt="Avatar" class="avatar" />
        </div>
        <div class="data">
            <label for="name"><b>Name</b></label>
            <input type="text" id="name" name="name" />
            
            <label for="lastName"><b>Last Name</b></label>
            <input type="text" id="lastName" name="latName" />
        </div>
    </div>

    <script src="js/demo.js"></script>
</body>
</html>
```

*./css/sites.css*
```css
body {
    font-family: Arial, Helvetica, sans-serif;
}

input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0 32px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.container {
    margin: auto;
    width: 50%;
}

.img {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}
  
img.avatar {
    width: 20%;
    border-radius: 50%;
}

.data {
    padding: 16px;
}
```

*./js/demo.js*
```js
document.getElementById("name").value = "Mi nombre";
document.getElementById("lastName").value = "Mi apellido";
document.getElementById("avatar").src ="img\\avatar.png";
```

***Resultado***

![Pantallazo][img1]

### 04.5.- Opcional

Añadimos un botón, que permita recuperar los valores y llevarlos a consola:

* Añadimos el botón al HTML
* Le damos estilo en el css.
* En Javascript recuperamos los valores y lo escribimos en la consola.

*./index.html*
```html

```

*./css/sites.css*
```css

```

*./js/demo.js*
```js

```

## 5.- Depurar con VS Code y Chrome

La extension de Deguber *For Chrome* se encuentra deshabilitada, y ha sido integrada dentro de una estensión habilitada por defecto, por lo que ya se cuenta con esa posibilidad de depuración sin necesidad de realizar dicha instalación.

Utilizaré esta opción para depurar. Siendo la configuración de la extensión igual que con la anterior extensión.

Se puede encontrar en el siguiente elmentode la barra derecha:

[JS Debugger][img2]

y si accedemos a la configuración podemos modificarla para que se vincule con el puerto de *lite-server*:

```js
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        
    {
        "name": "Lite Server",
        "request": "launch",
        "type": "pwa-msedge",
        "url": "http://127.0.0.1:3000",
        "webRoot": "${workspaceFolder}"
    }
    ]
}
```

Para que el depurador funcione, se debe primero lanzar *lite-server* en la carpeta contenedora de la web que se desea depurar.


[img1]: https://github.com/AghLearning/Lemoncode_JS_Entregas/blob/main/Modulo_1/docs/Modulo01-Ejercicio04.jpeg "Pantallazo"
[img2]: https://github.com/AghLearning/Lemoncode_JS_Entregas/blob/main/Modulo_1/docs/JS Debuguer.png "Pantallazo"
