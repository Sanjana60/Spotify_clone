const parentDiv2 = document.getElementById('section6');
let movie = [
  {'imgSrcc':'images/7.jpg','songname': 'Agar Tum Saath Ho', 'songnameauthor': 'Tamashaa'},
  {'imgSrcc':'images/8.jpg','songname': 'Suna Hai', 'songnameauthor': 'Neha Kakkar'},
  {'imgSrcc':'images/9.jpg','songname': 'Dilbar', 'songnameauthor': 'Satyameva Jayate'},
  {'imgSrcc':'images/10.jpg','songname': 'Duniya', 'songnameauthor': 'Luka Chuppi'},
  {'imgSrcc':'images/11.jpg','songname': 'Lagdi Lahore Di', 'songnameauthor': 'Street Dancer 3D'},
  {'imgSrcc':'images/12.jpg','songname': 'Putt Jatt De', 'songnameauthor': 'Putt Jatt De'},
  {'imgSrcc':'images/13.jpg','songname': 'Baarishein', 'songnameauthor': 'Atif Aslam'},

];

for (let i = 0; i < 7; i++) {
  const childDiv = document.createElement('div');
  childDiv.className = 'section7';

  const img = document.createElement('img');
  img.src = movie[i].imgSrcc;
  img.alt = movie[i].songname;
  childDiv.appendChild(img);

  const h3 = document.createElement('h3');
  h3.textContent = movie[i].songname;
  childDiv.appendChild(h3);

  const h6 = document.createElement('h6');
  h6.textContent = movie[i].songnameauthor;
  childDiv.appendChild(h6);

  parentDiv2.appendChild(childDiv);
}
