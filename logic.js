const parentDiv = document.getElementById('section2');

for(let i=0; i<3; i++) {
  const childDiv = document.createElement('div');
  childDiv.className = 'part1';
  
  const span = document.createElement('span');
  span.style.color = 'gray';
  span.textContent = '01';
  childDiv.appendChild(span);
  
  const img = document.createElement('img');
  img.src = 'images/1.jpg';
  img.alt = 'On My Way';
  img.style.height = '50px';
  childDiv.appendChild(img);
  
  const insideDiv = document.createElement('div');
  insideDiv.className = 'inside';
  childDiv.appendChild(insideDiv);
  
  const songSpan = document.createElement('span');
  songSpan.className = 'song';
  songSpan.textContent = 'On My Way';
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