

        let arr = []
        let addItem = () => {
            let fullname = document.getElementById('fullname').value;
            if (fullname) {
                arr.push(fullname)
            }


            displayData()

        }

        function displayData() {
            let row = ''
            arr.forEach((itm, index) => {
                row += `<tr id='id_${index}'>
                    <td>${index + 1}</td>
                    <td>${itm}</td>
                    <td>
                        <button class="btn btn-danger" onclick='deleteItem2(${index})'>Delete</button>
                    </td>
                    </tr>`;
            })

            document.getElementById('tBody').innerHTML = row;
        }

        function deleteItem(id) {
            debugger;
            if (id != undefined && id != null)
                arr.splice(id, 1)

            displayData()
        }
        function deleteItem2(id) {
            debugger;
            let rem = document.getElementById('id_' + id);
            rem.remove();
        }
        let btn = document.getElementsByTagName('button')[0];
        // Second option
        // btn.onclick = changeMe
        // Third  option
        btn.addEventListener('click', addItem);

        // btn.addEventListener('mouseover', () => {
        //     btn.classList.remove('btn-success');
        //     btn.classList.add('btn-danger')
        //     let newBtn = document.createElement('button')
        //     newBtn.innerText = 'Another btn';

        //     btn.parentElement.appendChild(newBtn)
        // });
        // btn.addEventListener('mouseout', () => {
        //     btn.classList.remove('btn-danger');
        //     btn.classList.add('btn-success')
        // });

