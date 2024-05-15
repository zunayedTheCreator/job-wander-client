import React from 'react';
import code1 from '../../../public/img/code1.svg'
import code2 from '../../../public/img/code2.svg'
import code3 from '../../../public/img/code2.svg'

const CodeExplain = () => {
    return (
        <div>
            <div className='flex flex-col mb-14'>
                <img src={code1} alt="" />
                <h3 className='text-2xl font-bold mt-5 mb-4 p-3'>Applied Jobs Page Code</h3>
                <p className='font-bold p-3'>This code snippet is a part of a React component that manages the display of job data. It utilizes conditional rendering to present either a loading spinner or a table containing job information, based on the state of the loading variable. When loading is true, indicating that data is being fetched or processed, a loading spinner is shown to provide visual feedback to the user. Once the data is loaded and loading becomes false, the component renders a table with job details such as photo, title, category, deadline, and salary. Additionally, if there are no applied jobs available, it displays a message notifying the user that they haven't applied to any jobs yet. This approach enhances user experience by keeping them informed about the status of data retrieval and presenting relevant information in a structured format.</p>
            </div>
            <div className='flex flex-col mb-14'>
                <img src={code2} alt="" />
                <h3 className='text-2xl font-bold mt-5 mb-4 p-3'>Search Query Code</h3>
                <p className='font-bold p-3'>In this code I fetched the datas from server side. The fetch operation will fetch the data with the value a user puts in the input field. After getting the the datas I put the datas in setSearchJobs state. Then I did a map operation on the setSearchJobs and showed the datas. And alsao if a user submits the input with out a value. It will give them a warning!</p>
            </div>
            <div className='flex flex-col mb-14'>
                <img src={code3} alt="" />
                <h3 className='text-2xl font-bold mt-5 mb-4 p-3'>New job add operation Code</h3>
                <p className='font-bold p-3'>This code snippet defines a function called handleAddJob that is triggered when a form submission event occurs. It prevents the default form submission behavior to handle the data submission manually. It extracts various form field values such as user name, email, job title, category, salary, description, posting date, photo, etc., from the form element. It constructs a new job object using these extracted values along with a deadline_date set to the deadline date.

                After constructing the job object, it logs the newly created job for debugging purposes. Then, it sends a POST request to a specified endpoint (http://localhost:5000/job) with the new job data in JSON format. This request includes headers specifying the content type as JSON. Upon receiving a response from the server, it parses the response JSON and logs it. If the response indicates that the job was successfully added (e.g., contains an insertedId property), it displays a success message using the Swal (SweetAlert) library.</p>
            </div>
        </div>
    );
};

export default CodeExplain;