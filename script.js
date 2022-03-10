const url = "https://api.jsonserve.com/5uVFVY"
fetch(url)
        .then(function (response) {
        return response.json();    
        })
        .then(function(data){
            console.log(data);

            // Profile One //
            const outputOne = document.querySelector('#profiles');
            const profileOne = document.createElement('section');
            profileOne.classList.add('portfolio__container');

            const divOne = document.createElement('div');
            divOne.innerHTML = '<h1>' + data.fangGang[0].profile1[0].basics['name'] + " | " + data.fangGang[0].profile1[0].basics['title'] + '</h1>'  + data.fangGang[0].profile1[0].basics.social1[0].network + " : " + '<a href="https://github.com/shiloh-byte">' + data.fangGang[0].profile1[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[0].profile1[0].basics.social2[0].network + " : " + '<a href="https://linkedin.com">' + data.fangGang[0].profile1[0].basics.social2[0].url + '</a>';

            const divTwo = document.createElement('p');
            divTwo.innerHTML = data.fangGang[0].profile1[0].basics['summary'];

            const divThree = document.createElement('div');
            const listOne = document.createElement('ul');

            const listItemOne = document.createElement('li');
            listItemOne.innerHTML = '<h3>' + data.fangGang[0].profile1[0].projects1[0].name +'</h3>' + "Role: " + data.fangGang[0].profile1[0].projects1[0].roles + '<br /> ' + "Start date: " + data.fangGang[0].profile1[0].projects1[0].startDate + ' | ' + "End date: " + data.fangGang[0].profile1[0].projects1[0].endDate + '<br />' + '<a href="https://github.com/shiloh-byte/Broken-Calculator">' + data.fangGang[0].profile1[0].projects1[0].url + '</a>';

            const listItemTwo = document.createElement('li');
            listItemTwo.innerHTML = '<h3>' + data.fangGang[0].profile1[0].projects2[0].name + '</h3>' + "Role: " + data.fangGang[0].profile1[0].projects2[0].roles + '<br /> ' + "Start date: " + data.fangGang[0].profile1[0].projects2[0].startDate + ' | ' + "End date: " + data.fangGang[0].profile1[0].projects2[0].endDate + '<br />' + '<a href="https://github.com/shiloh-byte/deck-of-cards">' + data.fangGang[0].profile1[0].projects2[0].url + '</a>';

            const listItemThree = document.createElement('li');
            listItemThree.innerHTML = '<h3>' + data.fangGang[0].profile1[0].projects3[0].name + '</h3>' + "Role: " + data.fangGang[0].profile1[0].projects3[0].roles + '<br /> ' + "Start date: " + data.fangGang[0].profile1[0].projects3[0].startDate + ' | ' + "End date: " + data.fangGang[0].profile1[0].projects3[0].endDate + '<br />' + '<a href="https://github.com/shiloh-byte/Portfolios">' + data.fangGang[0].profile1[0].projects3[0].url + '</a>';

            profileOne.appendChild(divOne);
            profileOne.appendChild(divTwo);
            
            listOne.appendChild(listItemOne);
            listOne.appendChild(listItemTwo);
            listOne.appendChild(listItemThree);
            divThree.appendChild(listOne);
            profileOne.appendChild(divThree);

            outputOne.appendChild(profileOne);


            // Profile Two //
            const outputTwo = document.querySelector('#profiles');
            const profileTwo = document.createElement('section');
            profileTwo.classList.add('portfolio__container2');

            const divFour = document.createElement('div');
            divFour.innerHTML = '<h1>' + data.fangGang[1].profile2[0].basics['name'] + " | " + data.fangGang[1].profile2[0].basics['title'] + '</h1>' + data.fangGang[1].profile2[0].basics.social1[0].network + " : " + '<a href="https://github.com/DavidAlex17">' + data.fangGang[1].profile2[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[1].profile2[0].basics.social2[0].network + " : " + '<a href="https://linkedin.com">' + data.fangGang[1].profile2[0].basics.social2[0].url + '</a>';

            const divFive = document.createElement('p');
            divFive.innerHTML = data.fangGang[1].profile2[0].basics['summary'];

            const divSix = document.createElement('div');
            const listTwo = document.createElement('ul');

            const listItemFour = document.createElement('li');
            listItemFour.innerHTML = '<h3>' +data.fangGang[1].profile2[0].projects1[0].name + '</h3>' + "Role: " + data.fangGang[1].profile2[0].projects1[0].roles + '<br /> ' + "Start date: " + data.fangGang[1].profile2[0].projects1[0].startDate + ' | ' + "End date: " + data.fangGang[1].profile2[0].projects1[0].endDate + '<br />'+ '<a href="https://github.com/DavidAlex17/Broken-Calculator">' + data.fangGang[1].profile2[0].projects1[0].url + '</a>';

            const listItemFive = document.createElement('li');
            listItemFive.innerHTML =  '<h3>' + data.fangGang[1].profile2[0].projects2[0].name + '</h3>' + "Role: " + data.fangGang[1].profile2[0].projects2[0].roles + '<br /> ' + "Start date: " + data.fangGang[1].profile2[0].projects2[0].startDate + ' | ' + "End date: " + data.fangGang[1].profile2[0].projects2[0].endDate + '<br />'+ '<a href="https://github.com/DavidAlex17/deck-of-cards">' + data.fangGang[1].profile2[0].projects2[0].url + '</a>';

            const listItemSix = document.createElement('li');
            listItemSix.innerHTML = '<h3>' + data.fangGang[1].profile2[0].projects3[0].name + '</h3>' + "Role: " + data.fangGang[1].profile2[0].projects3[0].roles + '<br /> ' + "Start date: " + data.fangGang[1].profile2[0].projects3[0].startDate + ' | ' + "End date: " + data.fangGang[1].profile2[0].projects3[0].endDate + '<br />'+ '<a href="https://github.com/DavidAlex17/Portfolios">' + data.fangGang[1].profile2[0].projects3[0].url + '</a>';

            profileTwo.appendChild(divFour);
            profileTwo.appendChild(divFive);
            
            listTwo.appendChild(listItemFour);
            listTwo.appendChild(listItemFive);
            listTwo.appendChild(listItemSix);
            divSix.appendChild(listTwo);

            profileTwo.appendChild(divSix);

            outputTwo.appendChild(profileTwo);


            // Profile Three //
            const outputThree = document.querySelector('#profiles');
            const profileThree = document.createElement('section');
            profileThree.classList.add('portfolio__container3');

            const divSeven = document.createElement('div');
            divSeven.innerHTML = '<h1>' + data.fangGang[2].profile3[0].basics['name'] + " | " + data.fangGang[2].profile3[0].basics['title'] + '</h1>' + data.fangGang[2].profile3[0].basics.social1[0].network + " : " + '<a href="https://github.com/tjschwartz7">' + data.fangGang[2].profile3[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[2].profile3[0].basics.social2[0].network + " : " + '<a href="https://linkedin.com">' + data.fangGang[2].profile3[0].basics.social2[0].url + '</a>';

            const divEight = document.createElement('p');
            divEight.innerHTML = data.fangGang[2].profile3[0].basics['summary'];

            const divNine = document.createElement('div');
            const listThree = document.createElement('ul');

            const listItemSeven = document.createElement('li');
            listItemSeven.innerHTML = '<h3>' + data.fangGang[2].profile3[0].projects1[0].name + '</h3>' + "Role: " + data.fangGang[2].profile3[0].projects1[0].roles + '<br /> ' + "Start date: " + data.fangGang[2].profile3[0].projects1[0].startDate + ' | ' + "End date: " + data.fangGang[2].profile3[0].projects1[0].endDate + '<br />'+ '<a href="https://github.com/tjschwartz7/Broken-Calculator">' + data.fangGang[2].profile3[0].projects1[0].url + '</a>';

            const listItemEight = document.createElement('li');
            listItemEight.innerHTML = '<h3>' + data.fangGang[2].profile3[0].projects2[0].name + '</h3>' + "Role: " + data.fangGang[2].profile3[0].projects2[0].roles + '<br /> ' + "Start date: " + data.fangGang[2].profile3[0].projects2[0].startDate + ' | ' + "End date: " + data.fangGang[2].profile3[0].projects2[0].endDate + '<br />'+ '<a href="https://github.com/tjschwartz7/deck-of-cards">' + data.fangGang[2].profile3[0].projects2[0].url + '</a>'; 
            

            const listItemNine = document.createElement('li');
            listItemNine.innerHTML = '<h3>' + data.fangGang[2].profile3[0].projects3[0].name + '</h3>' + "Role: " + data.fangGang[2].profile3[0].projects3[0].roles + '<br /> ' + "Start date: " + data.fangGang[2].profile3[0].projects3[0].startDate + ' | ' + "End date: " + data.fangGang[2].profile3[0].projects3[0].endDate + '<br />'+ '<a href="https://github.com/tjschwartz7/Portfolios">' + data.fangGang[2].profile3[0].projects3[0].url + '</a>';

            profileThree.appendChild(divSeven);
            profileThree.appendChild(divEight);
            
            listThree.appendChild(listItemSeven);
            listThree.appendChild(listItemEight);
            listThree.appendChild(listItemNine);
            divNine.appendChild(listThree);

            profileThree.appendChild(divNine);

            outputThree.appendChild(profileThree);
        })
