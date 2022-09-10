const selectedPlayerList = [];
      function displayPlayerBoard (selectedPlayers){
        const playerOnBoard = document.getElementById('player-on-board');
        playerOnBoard.innerHTML = "";
        for(let i = 0; i < selectedPlayers.length; i++){
          const name = selectedPlayers[i];
          const li = document.createElement('li');
          li.innerHTML = `
          <li>${i + 1}.<span>  ${name}</span></li>`;
          li.style = 'padding: 5px; text-align: left';
      
          playerOnBoard.appendChild(li); 
        }
      }
      function addToList(element){
        const playerName =element.parentNode.parentNode.children[0].innerText;
        selectedPlayerList.push(playerName);
        if(selectedPlayerList.length >= 6){
          alert ('You can not select more than five players.');
          if( selectedPlayerList.length > 5){
          selectedPlayerList.length = 5;
            return;
            }
        }
        element.disabled = true;
        element.style = "color: white";
        document.getElementById('total-added-players').innerText = selectedPlayerList.length;
        displayPlayerBoard(selectedPlayerList);
      }
      function getValueFromInput(elementId){
        const perPlayerCostElement = document.getElementById(elementId);
        const perPlayerCostString = perPlayerCostElement.value;
        if(isNaN(perPlayerCostString)){
          alert ("provide a valid number.");
        return perPlayerCostElement.value = ""; 
        }
        const perPlayerCost = parseFloat(perPlayerCostString);
        return perPlayerCost;
      }
      document.getElementById('btn-total-player-cost').addEventListener('click', function(){
        const perPlayerCost = getValueFromInput('per-player-cost');
        const totalPlayerCost = selectedPlayerList.length * perPlayerCost;
        document.getElementById('total-player-cost').innerText = totalPlayerCost;

        document.getElementById('btn-total-calculation').addEventListener('click', function(){
            const managerCost = getValueFromInput('manager-cost');
            const coachCost = getValueFromInput('coach-cost');
            const totalManagementCost = managerCost + coachCost;
            const totalCost = totalPlayerCost + totalManagementCost;
            document.getElementById('total-cost').innerText = totalCost;

      })
      })
      