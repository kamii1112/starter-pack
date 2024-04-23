import React from "react";

const Css = () => {
    return (
        <div className="px-5 pt-10">
            <h1 className="text-xl text-center font-semibold">CSS Cascading Style Sheets)</h1>
            <div className="w-[80%] h-[1px] bg-black mx-auto my-5"></div>
            <ul>
                <li>
                   <span className="spcl"> A CSS selector</span>
                    selects the HTML element’s you want to style,
                    <ul className="leftt">
                        <li> Simple selectors (select elements based on name, id, class)  </li>
                        <li> Combinator selectors (select elements based on a specific relationship between them)  </li>
                        <li> Pseudo-class selectors (select elements based on a certain state)  </li>
                        <li> Pseudo-elements selectors (select and style a part of an element)  </li>
                        <li> Attribute selectors (select elements based on an attribute or attribute value)  </li>
                    </ul>
                </li>
                <li> <span className="spcl"> Three ways to insert CSS</span>
                    <ul className="leftt">
                        <li>  <span className="spcl">External CSS:</span>   include external style sheet inside &lt;link&gt; element  </li>
                        <li> <span className="spcl"> Internal CSS:   </span> An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the &lt;style&gt; element, inside the head section.  </li>
                        <li>  <span className="spcl">Inline CSS:</span>   An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.
                            <ul className="leftt ">
                                <li> If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.  </li>
                                <li> All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
                                    <ol className="leftt">
                                        <li> Inline style (inside an HTML element)  </li>
                                        <li> External and internal style sheets (in the head section)  </li>
                                        <li> Browser default  </li>
                                    </ol>
                                    So, an inline style has the highest priority and will override external and internal styles and browser defaults.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li> <span className="spcl"> CSS colors:</span>
                    <ul className="leftt">
                        <li> background color: &lt;h1 style="background-color:DodgerBlue;"&gt;Hello World&lt;/h1&gt;  </li>
                        <li> text color: &lt;h1 style="color:Tomato;"&gt;Hello World&lt;/h1&gt;  </li>
                        <li> border color: &lt;h1 style="border:2px solid Tomato;"&gt;Hello World&lt;/h1&gt;  </li>
                    </ul>
                </li>
                <li>  <span className="spcl">CSS backgrounds:</span>
                    <pre><code>background : color image repeat attachment position;</code></pre>
                    <ul className="leftt ">
                        <li>  <span className="spcl">background color:</span>   <code>background-color: lightblue; opacity: 0.3;</code>  </li>
                        <li> <span className="spcl"> background image: </span>  <code>background-image: url("paper.gif");</code>

                            <ul className="leftt">
                                <li> by default the background-image property repeats an image both horizontally and vertically  </li>
                            </ul>
                        </li>
                        <li><span className="spcl">  Background repeat:</span>
                            <ul className="leftt">
                                <li> <code>background-repeat: repeat-x;</code>  </li>
                                <li> <code>background-repeat: repeat-y;</code>  </li>
                                <li> <code>background-repeat: no-repeat;</code>  </li>
                            </ul>
                        </li>
                        <li>  <span className="spcl">Background position:</span>
                            <ul className="leftt">
                                <li> <code>background-position: right top;</code>  </li>
                            </ul>
                        </li>
                        <li> <span className="spcl"> Background attachment: </span>  specifies whether a background image should be scroll or be fixed
                            <ul className="leftt">
                                <li> <code> background-attachment:   fixed;</code> the background image will be at same position even when it is scrolled  </li>
                                <li> <code> background-attachment:   scroll;</code>  </li>
                            </ul>
                        </li>
                    </ul>
                </li>



                <li>  <span className="spcl">CSS borders </span>   </li>
                <p><code> border:   width style color</code></p>

                <li> <span className="spcl"> Border style:</span>
                    <ul className="leftt">
                        <li> <code>border-style: dotted;</code>  </li>
                        <li> <code>border-style: dotted solid;</code>  </li>
                        <li> <code>border-style: dotted solid double dashed;</code>  </li>
                    </ul>
                </li>
                <li><span className="spcl">  Border width:</span>
                    <ul className="leftt">
                        <li> <code>border-width: 2px;</code>  </li>
                        <li> <code>border-width: 10px 20px;</code> (top/bottom, left/right)  </li>
                        <li> <code>border-width: 20px 20px 10px 10px;</code> (top, right, bottom, left)  </li>
                    </ul>
                </li>
                <li> <span className="spcl"> Border color:</span>
                    <ul className="leftt">
                        <li> <code>border-color: red;</code>  </li>
                        <li> <code>border-color: red green blue yellow;</code> (top, right, bottom, left)  </li>
                    </ul>
                </li>
                <li> <span className="spcl"> Rounded borders:</span>
                    <ul className="leftt">
                        <li> <code>border-radius: 5px;</code>  </li>
                    </ul>
                </li>


                <li> <span className="spcl"> CSS margins  </span>  </li>
                <p>Margins are used to create space around the elements, outside of any defined border.</p>
                <ul className="leftt">
                    <li> <code>margin: 25px 50px 75px 100px;</code>  </li>
                    <li> <code>margin: 25px 50px 75px;</code> (top, right/left, bottom)  </li>
                    <li> <code>margin: auto;</code> (auto to horizontally center the element within its container)  </li>
                </ul>

                <  li><span className="spcl"> CSS padding</span></  li>
                <p>Padding is used to create space around an element’s content, inside of any defined borders.</p>
                <ul className="leftt">
                    <li> <code>padding: 25px 50px 75px 100px;</code>  </li>
                </ul>

                <  li><span className="spcl"> CSS height, width and max-width  </span></  li>
                <p>The height and width properties are used to set the height and width of an element. The max-width property is used to set the maximum width of an element. The height and width properties do not include padding, borders, or margins; they set the height/width of the area inside the padding, border, and margin of the element.</p>

                <  li><span className="spcl"> CSS height, width and max-width  </span> </  li>
                <p>Outline is a line drawn outside the element’s border.</p>
                <pre><div className="eg">
                    outline: 2px ridge pink; <br />
                    outline-style: double; <br />
                    outline-width: medium; <br />
                    outline-color: blue; <br />
                    outline-offset: 15px; /* adds the space of 15px between an outline and border of an element, the space between an element and its outline is transparent */
                </div></pre>





                <li> <span className="spcl"> CSS text </span>   </li>
                <ul className="leftt">
                    <li>  Text color:   <code>color: green;</code>  </li>
                    <li>  Text alignment:
                        <ul className="leftt">
                            <li><span className="spcl">  Text align:</span>
                                <ul className="leftt">
                                    <li> <code>text-align: center;</code>  </li>
                                    <li> <code>text-align: left;</code>  </li>
                                    <li> <code>text-align: right;</code>  </li>
                                    <li> <code>text-align: justify;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> Text align last:</span>   Specifies how to align the last line of a text
                                <ul className="leftt">
                                    <li> <code>text-align-last: justify;</code>  </li>
                                    <li> <code>text-align-last: right;</code>  </li>
                                    <li> <code>text-align-last: center;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> Text direction:</span>   Can be used to change the text direction of an element
                                <ul className="leftt">
                                    <li> <code>direction: rtl; unicode-bidi: bidi-override;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> Vertical alignment:  </span> Sets the vertical alignment of an element
                                <ul className="leftt">
                                    <li> <code>vertical-align: baseline;</code>  </li>
                                    <li> <code>vertical-align: text-top;</code>  </li>
                                    <li> <code>vertical-align: text-bottom;</code>  </li>
                                    <li> <code>vertical-align: sub;</code>  </li>
                                    <li> <code>vertical-align: super;</code>  </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li> <span className="spcl"> Text decoration:  </span> <code>text-decoration: underline red double 4px;</code>
                        <ul className="leftt">
                            <li> <span className="spcl"> Text decoration line:</span>
                                <ul className="leftt">
                                    <li> <code>text-decoration-line: overline;</code>  </li>
                                    <li> <code>text-decoration-line: line-throught;</code>  </li>
                                    <li> <code>text-decoration-line: underline;</code>  </li>
                                    <li> <code>text-decoration-line: overline underline;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> Text decoration color:  </span> <code>text-decoration-color: blue;</code>  </li>
                            <li> <span className="spcl"> Text decoration style:</span>
                                <ul className="leftt">
                                    <li> <code>text-decoration-style: solid;</code> (this is default)  </li>
                                    <li> <code>text-decoration-style: double;</code>  </li>
                                    <li> <code>text-decoration-style: dotted;</code>  </li>
                                    <li> <code>text-decoration-style: dashed;</code>  </li>
                                    <li> <code>text-decoration-style: wavy;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> Text decoration thickness:</span>
                                <ul className="leftt">
                                    <li> <code>text-decoration-thickness: 5px;</code>  </li>
                                    <li> <code>text-decoration-thickness: auto;</code>  </li>
                                </ul>
                            </li>
                            <li> To remove underline under all links in HTML use <code> text-decoration: none;  </code>  </li>
                        </ul>
                    </li>
                    <li> <span className="spcl"> Text transformation:</span>
                        <ul className="leftt">
                            <li> <code>text-transform: uppercase;</code>  </li>
                            <li> <code>text-transform: lowercase;</code>  </li>
                            <li> <code>text-transform: capitalize;</code>  </li>
                        </ul>
                    </li>
                    <li> <span className="spcl"> Text spacing:</span>
                        <ul className="leftt">
                            <li> <span className="spcl"> Text indentation:</span>   Specify the indentation of the first line of a text
                                <ul className="leftt">
                                    <li> <code>text-indent: 50px;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> Letter spacing:</span>
                                <ul className="leftt">
                                    <li> <code>letter-spacing: 5px;</code>  </li>
                                    <li> <code>letter-spacing: -2px;</code>  </li>
                                </ul>
                            </li>
                            <li><span className="spcl">  Line height:</span>
                                <ul className="left">
                                    <li> <code>line-height: 0.8;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> Word spacing:</span>
                                <ul className="left">
                                    <li> <code>word-spacing: 10px;</code>  </li>
                                    <li> <code>word-spacing: -4px;</code>  </li>
                                </ul>
                            </li>
                            <li> <span className="spcl"> White spacing: </span>   Specifies how white-space inside an element is handled.
                                <ul className="left">
                                    <li> <code>white-space: nowrap;</code>  </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li> <span className="spcl"> Text shadow:</span>
                        <ul className="left">
                            <li> <code>text-shadow: 2px 2px;</code>  </li>
                            <li> <code>text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;</code>  </li>
                        </ul>
                    </li>

                    <li> <span className="spcl">CSS fonts </span> </li>
                    <p><code>font: style variant weight size/line-height family;</code></p>
                    <ul className="left">
                        <li>  <div className="Font family: "></div>  <code>font-family: "Times New Roman", Times, serif;</code>  </li>
                        <li> <span className="spcl"> Font style:</span>
                            <ul className="left">
                                <li> <code>font-style: normal;</code>  </li>
                                <li> <code>font-style: italic;</code>  </li>
                                <li> <code>font-style: oblique;</code>  </li>
                            </ul>
                        </li>
                        <li>  <span className="spcl">Font weight:</span>
                            <ul className="left">
                                <li> <code>font-weight: bold;</code>  </li>
                                <li> <code>font-weight: normal;</code>  </li>
                            </ul>
                        </li>
                        <li>  <span className="spcl">Font variant:</span>
                            <ul className="left">
                                <li> <code>font-variant: normal;</code>  </li>
                                <li> <code>font-variant: small-caps;</code>  </li>
                            </ul>
                        </li>
                        <li>  <span className="spcl">Font size:</span>
                            <ul className="left">
                                <li> <code>font-size: 14px;</code>  </li>
                                <li> <code>font-size: 2.5em;</code> (40px/16=2.5em)  </li>
                            </ul>
                        </li>
                    </ul>

                    <li> <span className="spcl"> CSS icons </span>   </li>
                    <p>To use icons in your webpage, you can include font awesome, bootstrap, or google icons.</p>
                    <ul className="left">
                        <li>  <span className="spcl">Font Awesome Icons:</span>
                            <ul className="left">
                                <li> Add the following script in the <code>&lt;head&gt;</code> section of your HTML page:
                                    <code>&lt;script src="https://kit.fontawesome.com/*yourcode*.js" crossorigin="anonymous"&gt;&lt;/script&gt;</code>
                                </li>
                            </ul>
                        </li>
                        <li> <span className="spcl"> Bootstrap Icons:</span>
                            <ul className="left">
                                <li> Add the following link in the <code>&lt;head&gt;</code> section of your HTML page:
                                    <code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;</code>
                                </li>
                            </ul>
                        </li>
                        <li>  <span className="spcl">Google Icons:</span>
                            <ul className="left">
                                <li> Add the following link in the <code>&lt;head&gt;</code> section of your HTML page:
                                    <code>&lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"&gt;</code>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <li><span className="spcl">  CSS links</span>    </li>
                    <p><span className="spcl">Styling links in CSS:</span></p>
                    <ul className="left">
                        <li> <code>a:link</code>  </li>
                        <li> <code>a:visited</code>  </li>
                        <li> <code>a:hover</code>  </li>
                        <li> <code>a:active</code>  </li>
                    </ul>

                    <li><span className="spcl">  CSS lists  </span>  </li>
                    <p><span className="spcl">Styling lists in CSS:</span></p>
                    <ul className="left">
                        <li>  <div className="List style type:"></div>   Specifies the type of list item marker
                            <ul className="left">
                                <li> <code>list-style-type: circle;</code>  </li>
                                <li> <code>list-style-type: square;</code>  </li>
                                <li> <code>list-style-type: upper-roman;</code>  </li>
                                <li> <code>list-style-type: lower-alpha;</code>  </li>
                            </ul>
                        </li>
                        <li> <div className=" List style image: "></div>  Specifies an image as the list item marker
                            <ul className="left">
                                <li> <code>list-style-image: url('sqpurple.gif');</code>  </li>
                            </ul>
                        </li>
                        <li> <span className="spcl"> List style position:</span>
                            <ul className="left">
                                <li> <code>list-style-position: inside;</code>  </li>
                                <li> <code>list-style-position: outside;</code>  </li>
                            </ul>
                        </li>
                        <li> <span className="spcl"> Remove default settings:</span>
                            <ul className="left" >
                                <li> <code>list-style-type: none; margin: 0; padding: 0;</code>  </li>
                            </ul>
                        </li>
                    </ul>

                    <li> <span className="spcl"> CSS tables  </span>  </li>
                    <p>Styling tables in CSS:</p>
                    <ul className="left">
                        <li>  <span className="spcl">Border collapse:  </span> Set whether table borders should be collapsed into a single border or not
                            <ul>
                                <li> <code>border-collapse: collapse;</code>  </li>
                            </ul>
                        </li>
                        <li><span className="spcl">  Table size:  </span> Width and height  </li>
                        <li>  <span className="spcl">Text align: </span>  Left, right, center  </li>
                        <li> <span className="spcl"> Vertical alignment:</span>   Bottom, top, center  </li>
                        <li> Padding  </li>
                        <li> <code>tr:hover</code>  </li>
                    </ul>

                    <li> <span className="spcl"> CSS display </span>   </li>
                    <p>Specify how an element is shown on a web page, default if block or inline</p>
                    <ul className="left">
                        <li>  <span className="spcl">Block level element: </span>  Always starts on a new line and takes up full width available
                            <ul className="left">
                                <li> div, headings, p, form, header, footer, section  </li>
                            </ul>
                        </li>
                        <li> <span className="spcl"> Inline element:</span>   Does not start on a new line and only takes up as much width as necessary
                            <ul className="left">
                                <li> span, img, a  </li>
                            </ul>
                        </li>
                    </ul>




                    <li> <span className="spcl"> CSS Layout Position Property</span>    </li>
                    <ul className="left">
                        <li> <code>position: static;</code> - Normal flow of page  </li>
                        <li> <code>position: relative;</code> - Relative to its normal position  </li>
                        <li> <code>position: fixed;</code> - Positioned relative to the viewport  </li>
                        <li> <code>position: absolute;</code> - Relative to the nearest ancestor  </li>
                        <li> <code>position: sticky;</code> - Toggles between relative and fixed  </li>
                    </ul>

                    <li> <span className="spcl">CSS Layout Z Index</span>  </li>
                    <p>Specifies the stack order of an element. Must use absolute positioning.</p>

                    <li><span className="spcl"> CSS Layout Overflow</span>  </li>
                    <ul className="left">
                        <li> <code>overflow: visible;</code>  </li>
                        <li> <code>overflow: hidden;</code>  </li>
                        <li> <code>overflow: scroll;</code>  </li>
                        <li> <code>overflow: auto;</code> - Adds scrollbars only when necessary  </li>
                        <li> Overflow-x and overflow-y  </li>
                    </ul >

                    <li> <span className="spcl">CSS Layout Float and Clear </span> </li>
                    <ul className="left">
                        <li> Float property specifies how an element shoul className="left"d float  </li>
                        <li> Clear property specifies what element can float beside the cleared element and on which side  </li>
                    </ul >

                    <li><span className="spcl"> CSS Layout Inline-Block </span> </li>
                    <p>The major difference between <code>display: inline</code> and <code>display: inline-block</code> is that the latter allows setting a width and height on the element, as well as top and bottom margins and paddings. Additionally, it does not add a line break after the element.</p>

                    <li> <span className="spcl">CSS Layout </span>- Horizontal and Vertical Align  </li>
                    <p>Ways to center-align elements:</p>
                    <ul className="left">
                        <li> Center align element: <code>margin: auto;</code>  </li>
                        <li> Center align text: <code>text-align: center;</code>  </li>
                        <li> Center an image: <code>margin-left: auto; margin-right: auto;</code>  </li>
                        <li> Center vertically using flexbox: <code>display: flex; justify-content: center; align-items: center;</code>  </li>
                    </ul>

                    <li> <span className="spcl">CSS Combinators </span> </li>
                    <ul className="left">
                        <li> Descendant selector (space)  </li>
                        <li> Child selector (&gt;)  </li>
                        <li> Adjacent sibling selector (+)  </li>
                        <li> General sibling selector (~)  </li>
                    </ul>

                    <li><span className="spcl"> CSS Pseudo Classes</span>  </li>
                    <p>Used to define the special state of an element like hover, unvisited link, focus</p>
                    <table className="border border-black">
                        <thead className="bg-slate-100">
                            <tr>
                                <th>Selector</th>
                                <th>Example</th>
                                <th>Example description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_active.asp">:active</a></td>
                                <td><code>a:active</code></td>
                                <td>Selects the active link</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_checked.asp">:checked</a></td>
                                <td><code>input:checked</code></td>
                                <td>Selects every checked &lt;input&gt; element</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_disabled.asp">:disabled</a></td>
                                <td><code>input:disabled</code></td>
                                <td>Selects every disabled &lt;input&gt; element</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_empty.asp">:empty</a></td>
                                <td><code>p:empty</code></td>
                                <td>Selects every &lt;p&gt; element that has no children</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_enabled.asp">:enabled</a></td>
                                <td><code>input:enabled</code></td>
                                <td>Selects every enabled &lt;input&gt; element</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_firstchild.asp">:first-child</a></td>
                                <td><code>p:first-child</code></td>
                                <td>Selects every &lt;p&gt; element that is the first child of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_first-of-type.asp">:first-of-type</a></td>
                                <td><code>p:first-of-type</code></td>
                                <td>Selects every &lt;p&gt; element that is the first &lt;p&gt; element of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_focus.asp">:focus</a></td>
                                <td><code>input:focus</code></td>
                                <td>Selects the &lt;input&gt; element that has focus</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_hover.asp">:hover</a></td>
                                <td><code>a:hover</code></td>
                                <td>Selects links on mouse over</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_in-range.asp">:in-range</a></td>
                                <td><code>input:in-range</code></td>
                                <td>Selects &lt;input&gt; elements with a value within a specified range</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_invalid.asp">:invalid</a></td>
                                <td><code>input:invalid</code></td>
                                <td>Selects all &lt;input&gt; elements with an invalid value</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_lang.asp">:lang()</a></td>
                                <td><code>p:lang(it)</code></td>
                                <td>Selects every &lt;p&gt; element with a lang attribute value starting with "it"</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_last-child.asp">:last-child</a></td>
                                <td><code>p:last-child</code></td>
                                <td>Selects every &lt;p&gt; elements that is the last child of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_last-of-type.asp">:last-of-type</a></td>
                                <td><code>p:last-of-type</code></td>
                                <td>Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_link.asp">:link</a></td>
                                <td><code>a:link</code></td>
                                <td>Selects all unvisited links</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_not.asp">:not()</a></td>
                                <td><code>:not(p)</code></td>
                                <td>Selects every element that is not a &lt;p&gt; element</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_nth-child.asp">:nth-child()</a></td>
                                <td><code>p:nth-child(2)</code></td>
                                <td>Selects every &lt;p&gt; element that is the second child of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_nth-last-child.asp">:nth-last-child()</a></td>
                                <td><code>p:nth-last-child(2)</code></td>
                                <td>Selects every &lt;p&gt; element that is the second child of its parent, counting from the last child</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_nth-last-of-type.asp">:nth-last-of-type()</a></td>
                                <td><code>p:nth-last-of-type(2)</code></td>
                                <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting from the last child</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_nth-of-type.asp">:nth-of-type()</a></td>
                                <td><code>p:nth-of-type(2)</code></td>
                                <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_only-of-type.asp">:only-of-type</a></td>
                                <td><code>p:only-of-type</code></td>
                                <td>Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_only-child.asp">:only-child</a></td>
                                <td><code>p:only-child</code></td>
                                <td>Selects every &lt;p&gt; element that is the only child of its parent</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_optional.asp">:optional</a></td>
                                <td><code>input:optional</code></td>
                                <td>Selects &lt;input&gt; elements with no "required" attribute</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_out-of-range.asp">:out-of-range</a></td>
                                <td><code>input:out-of-range</code></td>
                                <td>Selects &lt;input&gt; elements with a value outside a specified range</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_read-only.asp">:read-only</a></td>
                                <td><code>input:read-only</code></td>
                                <td>Selects &lt;input&gt; elements with a "readonly" attribute specified</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_read-write.asp">:read-write</a></td>
                                <td><code>input:read-write</code></td>
                                <td>Selects &lt;input&gt; elements with no "readonly" attribute</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_required.asp">:required</a></td>
                                <td><code>input:required</code></td>
                                <td>Selects &lt;input&gt; elements with a "required" attribute specified</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_root.asp">:root</a></td>
                                <td><code>root</code></td>
                                <td>Selects the document's root element</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_target.asp">:target</a></td>
                                <td><code>#news:target</code></td>
                                <td>Selects the current active #news element (clicked on a URL containing that anchor name)</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_valid.asp">:valid</a></td>
                                <td><code>input:valid</code></td>
                                <td>Selects all &lt;input&gt; elements with a valid value</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_visited.asp">:visited</a></td>
                                <td><code>a:visited</code></td>
                                <td>Selects all visited links</td>
                            </tr>
                        </tbody>
                    </table>

                    <li><span className="spcl"> CSS Opacity or Transparency </span> </li>
                    <p><code>opacity: 0.5;</code></p>

                    <li> <span className="spcl">CSS Navigation Bar</span>  </li>
                    <p>Vertical navbar, horizontal navbar</p>

                    <li> <span className="spcl">CSS Dropdowns  </span></li>

                    <li> <span className="spcl">CSS Image Sprites  </span></li>
                    <p>An image sprite is a collection of images put into a single image. It reduces the number of server requests and saves bandwidth.</p>

                    <li> <div className="CSS Attribute Selectors "></div> </li>
                    <p>Styling HTML elements with specific attributes or attribute values</p>

                    <table className="border border-black">
                        <thead className="bg-slate-100">
                            <tr>
                                <th>Selector</th>
                                <th>Example</th>
                                <th>Example description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_attribute.php">[target]</a></td>
                                <td><code>[target]</code></td>
                                <td>Selects all elements with a target attribute</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_attribute_value.php">[target="_blank"]</a></td>
                                <td><code>[target="_blank"]</code></td>
                                <td>Selects all elements with target="_blank"</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_attribute_value_contains.php">[title~="flower"]</a></td>
                                <td><code>[title~="flower"]</code></td>
                                <td>Selects all elements with a title attribute that contains a space-separated list of words, one of which is "flower"</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_attribute_value_lang.php">[lang|="en"]</a></td>
                                <td><code>[lang|="en"]</code></td>
                                <td>Selects all elements with a lang attribute value starting with "en"</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_attr_begin.php">a[href^="https"]</a></td>
                                <td><code>a[href^="https"]</code></td>
                                <td>Selects all &lt;a&gt; elements with a href attribute value starting with "https"</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_attr_end.php">a[href$=".pdf"]</a></td>
                                <td><code>a[href$=".pdf"]</code></td>
                                <td>Selects all &lt;a&gt; elements with a href attribute value ending with ".pdf"</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.w3schools.com/cssref/sel_attr_contain.php">a[href*="schools"]</a></td>
                                <td><code>a[href*="schools"]</code></td>
                                <td>Selects all &lt;a&gt; elements with a href attribute value containing the substring "schools"</td>
                            </tr>
                        </tbody>
                    </table>





                    <li><span className="spcl"> CSS Specify for Multi</span> className="left"tiple Styling  </li>
                    <p>p &lt; class &lt; id &lt; inline-style</p>

                    <li><span className="spcl"> CSS Math Functions</span>  </li>
                    <ul className="left">
                        <li> <code>calc(100% - 100px)</code>  </li>
                        <li> <code>max(50%, 300px)</code>  </li>
                        <li> <code>min(50%, 300px)</code>  </li>
                    </ul>
                </ul>
            </ul>


        </div>
    )
}

export default Css;