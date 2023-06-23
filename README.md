Test Técnico  


Para este ejercicio será necesario que realices una serie de componentes para demostrar tus habilidades lógicas y creativas. Tendrás que realizar una propuesta con buena presentación y que sea atractiva para los usuarios.

Cada uno de los componentes deberá estar en una ruta independiente, accesible mediante un menú principal.

Tecnologías requeridas : Vue 3, Boostrap y Axios.

Login
Crea una pagina de login haciendo una llamada GET a la api: https://mocki.io/v1/3e408794-39ed-4c75-bb6e-c49c578de293 

successData:
  User: “HMHuser”
  pass: “techTest”

1.-El password se deberá codificar en MD5 y se considerará loginSuccess, cuando los datos ingresados coincidan con la respuesta de la api.
2.-Se deberá almacenar una cookie para saber si el usuario tiene sesión.
3.-Solo la página de Login deberá ser pública. Todas las demás requieren loginSuccess

Todo list
Crea un componente que muestre una lista de tareas. { id: idUnico, title : ‘’’, done:false}

1.-Se debe poder crear nuevas tareas.
2.-Cada tarea deberá poderse eliminar o modificar.
3.-Haciendo uso de variables computadas, deberá mostrar las tareas ordenando primero las que se encuentren en estatus pendiente
4.-Deberá mostrar un identificador gráfico que indique si está completada


Timer
Crea un componente que muestre un temporizador. 

1.-Deberá recibir la duración en segundos y deberá actualizar en tiempo real el contador con formato "HH:MM:SS". 
2.-Deberá poderse Iniciar, Pausar y Limpiar
3.-Emitir todos los eventos personalizados que se requieran.

Git Profile

Api: https://api.github.com/users/{username}

Crea un componente que muestre el perfil de un usuario de GitHub mediante una búsqueda.

El componente debe tener las siguientes características:

1.-Deberá existir un input “Buscador” para buscar los perfiles
2.-Se deberá mostrar la información más relevante del perfil
3.-Deberá contar con manejo de errores (si el usuario no existe)


