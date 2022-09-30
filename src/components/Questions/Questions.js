import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="container questions">
            <h3>Questions</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How does React Work?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>React implements a virtual DOM that is a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>
                            
                            <p>Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
                            
                            <p>Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What are difference between props and state?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>props</p>
                            <p>
                               <ul>
                                    <li>Props are read-only.</li>
                                    <li>It is immutable so it cannot be modified.</li>
                                    <li>With props you can pass data from one component to another.</li>
                                    <li>Props can be used with state and functional components.</li>
                                </ul> 
                            </p>
                            <br />
                            <p>state</p>
                            <p>
                                <ul>
                                    <li>State is both read and write.</li>
                                    <li>It is mutable so it can be modified.</li>
                                    <li>The data is passed within the component only.</li>
                                    <li>State can be used only with the state components/class component (Before 16.0).</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What are the uses of useEffect except API data load?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>useEffect is not only used for fetching or loading API data but also can be used for:</p>
                            <p>
                                <ul>
                                    <li>Validating input field</li>
                                    <li>Trigger animation on new array value</li>
                                    <li> Changing state value</li>
                                    <li> Changing props value</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;