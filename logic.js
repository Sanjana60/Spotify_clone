const parentDiv = document.getElementById('section2');
let songs = [
    {
      'name': "On My Way",
      'author': "Alan Walker",
      'imgSrc': 'images/1.jpg',
      'altText': 'On My Way'
    },
    {
      'name': "Alan Walker - Faded",
      'author': "Alan Walker",
      'imgSrc': 'images/2.jpg',
      'altText': 'Alan Walker - Faded'
    },
    {
        'name': "Cartoon - On & On",
        'author': "Alan Walker",
        'imgSrc': 'images/4.jpg',
        'altText': 'Cartoon - On & On'
      },
      {
        'name': "Warriyo - Mortals",
        'author': "Alan Walker",
        'imgSrc': 'images/3.jpg',
        'altText': 'Warriyo - Mortals'
      },
      {
        'name': "Ertugrul Gazi",
        'author': "Alan Walker",
        'imgSrc': 'images/5.jpg',
        'altText': 'Ertugrul Gazi'
      },
      {
        'name': "Electronic Music",
        'author': "Alan Walker",
        'imgSrc': 'images/6.jpg',
        'altText': 'Electronic Music'
      },

  ];
  
for(let i=0; i<6; i++) {
    const childDiv = document.createElement('div');
    childDiv.className = 'part1';
    
    const span = document.createElement('span');
    span.style.color = 'gray';
    span.textContent = '0' + (i + 1);
    childDiv.appendChild(span);
    
    const img = document.createElement('img');
    img.src = songs[i].imgSrc; // Update image source
    img.alt = songs[i].altText; // Update alt text
    img.style.height = '50px';
    childDiv.appendChild(img);
    
    const insideDiv = document.createElement('div');
    insideDiv.className = 'inside';
    childDiv.appendChild(insideDiv);
    
    const songSpan = document.createElement('span');
    songSpan.className = 'song';
    songSpan.textContent = songs[i].name; // Update song name
    insideDiv.appendChild(songSpan);
    
    const authorSpan = document.createElement('span');
    authorSpan.className = 'author';
    authorSpan.textContent = songs[i].author; // Update author
    insideDiv.appendChild(authorSpan);
    
    const playIcon = document.createElement('i');
    playIcon.className = 'fa fa-play-circle fa-2x';
    childDiv.appendChild(playIcon);
    
    parentDiv.appendChild(childDiv);
  }




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
  


  const parentDiv3 = document.getElementById('section10');

  let songauthorname = [
    {'imgSrcc':'images/s1.jpg','altText':'Arijit Singh'},
    {'imgSrcc':'images/s2.jpg', 'altText':'Arijit Singh'},
    {'imgSrcc':'images/s3.jpg','altText':'Arijit Singh'},
    {'imgSrcc':'images/s4.jpg','altText':'Arijit Singh'},
    {'imgSrcc':'images/11.jpg','altText':'Arijit Singh'},
    {'imgSrcc':'images/12.jpg','altText':'Arijit Singh'},
    {'imgSrcc':'images/13.jpg','altText':'Arijit Singh'},
    {'imgSrcc':'images/13.jpg','altText':'Arijit Singh'},
    {'imgSrcc':'images/13.jpg','altText':'Arijit Singh'},
  ];
  
  for (let i = 0; i < 9; i++) {
    const img = document.createElement('img');
    img.src = songauthorname[i].imgSrcc;
    img.alt = songauthorname[i].altText;
    img.className = 'rounded';
    img.style.padding = '10px';
    parentDiv3.appendChild(img);
  }
  




  
  