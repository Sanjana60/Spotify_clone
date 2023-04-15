const parentDiv = document.getElementById('section2');
let songs = [{'name':"Faded","author":"Alan Walker"},{'name':"Fadederr","author":"Alan"}]
for(let i=0; i<2; i++) {
  const childDiv = document.createElement('div');
  childDiv.className = 'part1';
  
  const span = document.createElement('span');
  span.style.color = 'gray';
  span.textContent = '01';
  childDiv.appendChild(span);
  
  const img = document.createElement('img');
  img.src = 'images/1.jpg';
  img.alt = songs[i].name;
  img.style.height = '50px';
  childDiv.appendChild(img);
  
  const insideDiv = document.createElement('div');
  insideDiv.className = 'inside';
  childDiv.appendChild(insideDiv);
  
  const songSpan = document.createElement('span');
  songSpan.className = 'song';
  songSpan.textContent = songs[i].author;
  insideDiv.appendChild(songSpan);
  
  const authorSpan = document.createElement('span');
  authorSpan.className = 'author';
  authorSpan.textContent = 'Alan Walker';
  insideDiv.appendChild(authorSpan);
  
  const playIcon = document.createElement('i');
  playIcon.className = 'fa fa-play-circle fa-2x';
  childDiv.appendChild(playIcon);
  
  parentDiv.appendChild(childDiv);
}