let search_course = document.getElementById('searchcourse');
let dataOfCourses =
    [
        [
            {
                nameCourses: 'Web Development Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/web2.jpeg',
                LinkVideo: 'https://www.notion.so/Web-Development-Beginners-Course-7a5feef504104fd68d50a3b720ccff1d',
            },
            {
                nameCourses: 'Algrothims Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/algroo.jpg',
                LinkVideo: 'https://www.notion.so/Algorithms-Beginners-Course-06a3985257274263a1a93bf6e5716c28',
            },


            {
                nameCourses: 'SQL Beginners Course',
                date: 'Updated 12/20/2022',
                pathImage: 'courses/sql.jpg',
                LinkVideo: 'https://www.notion.so/SQL-Beginners-Course-f6b88a91ffbf417f9708df866c226bb4',
            }

        ],

        [
            {
                nameCourses: 'Data Science Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/ds.jpg',
                LinkVideo: 'https://www.notion.so/Data-Science-Beginners-Course-8e7f23711a5148f7af34ee16c991c56b',
            },
            {
                nameCourses: 'Software Engineering Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/SWE.jpg',
                LinkVideo: 'https://www.notion.so/Software-Engineering-Beginners-Course-8d4474e161c249889dbbd93c76876321',
            },


            {
                nameCourses: 'Computer Organization Beginners Course',
                date: 'Updated 12/20/2022',
                pathImage: 'courses/co.jpg',
                LinkVideo: 'https://www.notion.so/Computer-Organization-Beginners-Course-53778eb876c9434f89dd7ee327b8202c',
            },
        ],



        [
            {
                nameCourses: 'Ordinary Differential Equations Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/ode.jpg',
                LinkVideo: 'https://www.notion.so/Ordinary-Differential-Equations-Beginners-Course-4b836a110c434310b4eb60322fedd2dc',
            },
            {
                nameCourses: 'Probability Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/prob.jpg',
                LinkVideo: 'https://www.notion.so/Probability-Beginners-Course-8111f065ac5242e58c3222374c58ef20',
            },


            {
                nameCourses: 'Japanese Beginners Course',
                date: 'Updated 12/20/2022',
                pathImage: 'courses/Japanese.jpg',
                LinkVideo: 'https://www.notion.so/Japanese-Beginners-Course-a76f344636584bff89736a9a3d6021b2',
            },
        ],
    ]



let concat = '';
let visit_courses = document.getElementById('visit-courses');


function display() {
    concat = '';
    for (let n = 0; n < dataOfCourses.length; n++) {

        concat +=
            `<tr>`
        for (let i = 0; i < dataOfCourses[n].length; i++) 
        {
            concat +=
                `<td class="child ds">
                    <a href="${dataOfCourses[n][i].LinkVideo}">
                        <img class="image" src="${dataOfCourses[n][i].pathImage}" alt="Data Sceince"
                            width="500px"> 
                    </a>
                
                    <div class="details">
                        <span> ${dataOfCourses[n][i].date}</span>
                        <h6>${dataOfCourses[n][i].nameCourses}</h6>
                        </div>
                </td>
                    `
        }
        concat += '</tr>';
    }
    visit_courses.innerHTML = concat;
}
display();





function displayFilter(x) 
{

    concat = '';
    concat +='<tr>'
    for (let n = 0; n < x.length; n++) 
    {
        concat +=
            `
                <td class="child ds">
                    <a href="${x[n].LinkVideo}">
                        <img class="image" src="${x[n].pathImage}" alt="Data Sceince"
                            width="500px"> 
                    </a>
                
                    <div class="details">
                        <span> ${x[n].date}/span>
                        <h6>${x[n].nameCourses}</h6>
                        </div>
                </td>`
    }
    concat +='</tr>'
    visit_courses.innerHTML = concat;
}







search_course.addEventListener('input', function ()
{ 
    if(search_course.value=='')
    {
        display();
    }
    else
    {
        searchData(search_course.value);
    }

})




function searchData(x) {

    let FilterData = [];
    for (let n = 0; n < dataOfCourses.length; n++) {
        for (let i = 0; i < dataOfCourses.length; i++) {
            if (dataOfCourses[n][i].nameCourses.toLowerCase().includes(x.toLowerCase())) {
                FilterData.push(dataOfCourses[n][i]);
            }
        }
    }
    displayFilter(FilterData);
    console.log(FilterData)
}



