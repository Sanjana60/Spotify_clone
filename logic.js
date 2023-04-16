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
  