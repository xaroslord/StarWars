// 83

const Site = 'https://swapi.dev/api/people/'

function getValue() {
	$("#find").on('mouseup', function(event) {
		value = $('#field').val();
		if (parseInt(value) > 0 && parseInt(value) <= 82) {
			var Character = Site.concat(value);
			fetch(Character)
			.then((response) => {
  				if (response.ok) {return response.json();}
  				else {alert('Персонаж не найден');}
  			})
			.then((data) => {console.log(data);

					var a = (data);
					document.getElementById('name').textContent= a.name;

					//Планета
					fetch(a.homeworld)
					.then((response) => {return response.json();
					})
					.then((data) => {console.log(data);
						var b = (data);
						document.getElementById('planet').textContent= b.name;
						});

					//обнуление цвета, рамка
					$('#eye').css("border", "1px solid white");
					$('#eye').css("background", "transparent");

					//проверка на цвет глаз, задание цвета
					if (a.eye_color == "unknown") {
						alert("Цвет глаз неизвестен");
					}
					else if (a.eye_color == "hazel") {
						$('#eye').css("background-color", "#cbce86");
					}
					else {
						$('#eye').css("background-color", a.eye_color);
					}

					// ширина, высота
					$('#eye').css("width", a.mass);
					$('#eye').css("height", a.height);

					// пол
					if (a.gender == "female") {
						$('#eye').css("border-radius", "50%");
					}
					else $('#eye').css("border-radius", "0%");
			});

		}
		else {alert("Введите положительное число от 1 до 82");}
	});
}


getValue();

