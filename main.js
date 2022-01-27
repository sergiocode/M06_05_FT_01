window.onload = () => {
    const elementosClick = document.querySelectorAll('.elementoClick');
    const button2 = document.querySelector('#button2');

    const listaTareas = document.querySelector('.listaTareas');
    const añadirTarea = document.querySelector('.añadirTarea');
    const mostrarTarea = document.querySelector('.mostrarTarea');

    button2.addEventListener('mouseover', () => {
        button2.style.backgroundColor = 'white';
        button2.style.color = 'black';
    });
    
    button2.addEventListener('mouseout', () => {
        button2.style.backgroundColor = 'rgb(48, 48, 48)';
        button2.style.color = 'white';
    });

    function hanFetClick() {
        console.log('Has fet click a ', this.innerHTML);
        alert('Has fet click a ' + this.innerHTML);
    }

    elementosClick.forEach(elemento => {
        elemento.addEventListener("click", hanFetClick);
    });

    añadirTarea.addEventListener("click", () => {
        const nombre = prompt('Nombre de la tarea:');
        const descripcion = prompt('Descripción de la tarea:');
        const idBtn = 'btn' + nombre;

        if (nombre !== "" && descripcion !== "") {
            listaTareas.innerHTML += 
            `<div class="tarea">
                <div class="tareaNombre">${nombre}</div>
                <div class="tareaInfo">${descripcion}</div>
                <div class="tareaCheck">
                    <input class="checkbox" type="checkbox" name="" id="">
                </div>
            </div>`;
        } else {
            alert('Debes rellenar todos los campos');
        }
    });

    function relojAuto() {
		const reloj = new Date();
		let horas = reloj.getHours();
		let minutos = reloj.getMinutes();
		let segundos = reloj.getSeconds();
    
        if (horas < 10) {horas = '0' + horas}
        if (minutos < 10) {minutos = '0' + minutos}
        if (segundos < 10) {segundos = '0' + segundos}

        document.getElementById("reloj").innerHTML = `${horas} : ${minutos} : ${segundos}`;
    }

    
    setInterval(relojAuto, 1000);

    setTimeout(() => {
        alert('Se está mostradno después de 5 segundos');
    }, 5000);
};