import React from "react";

const Html = () =>{
    return(
        <div className="px-5 pt-10">

            <h1 className="text-xl text-center font-semibold">HTML (Hyper Text Markup Language)</h1>
            <div className="w-[80%] h-[1px] bg-black mx-auto my-5"></div>
            <ul className="flex flex-col gap-3">
                <li className="">The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that this document is an HTML5 document  </li>
                <li className="">The <code>&lt;html&gt;</code> element is the root element of an HTML page  </li>
                <li> The <code>&lt;head&gt;</code> element contains meta information about the HTML page  </li>
                <li> The <code>&lt;title&gt;</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)  </li>
                <li> The <code>&lt;body&gt;</code> element defines the document's body, and is a container for all the visible contents,
                    such as headings, paragraphs, images, hyperlinks, tables, lists, etc.  </li>
                <li> An   HTML element    is defined by a start tag, some content, and an end tag  </li>
                <li>   HTML attributes   provide additional information about HTML elements, it includes <code>href, src, alt, width,
                    height, style, lang, title</code> (The <code>title</code> attribute defines some extra information about
                    an element. The value of the title attribute will be displayed as a tooltip when you mouse over the element)  </li>
                <li>   HTML headings:    <code>&lt;h1&gt; &lt;h6&gt;</code>  </li>
                <li>  HTML paragraphs:   <code>&lt;p&gt;&lt;/p&gt;</code>  </li>
                <li>  HTML horizontal rules:   <code>&lt;hr&gt;</code> tag defines a thematic break in an HTML page, and is most
                    often displayed as horizontal rule, used to separate content in HTML page  </li>
                <li>  HTML line breaks:   <code>&lt;br&gt;</code> defines a line break,  </li>
                <li>  HTML pre element:   defines preformatted text, the text inside a <code>&lt;pre&gt;</code> elements is displayed
                    in a fixed-width font and it preserves both spaces and line breaks  </li>
                <li>  HTML styles   attribute is used to add styles to an element such as color, font, size  </li>
                <li>  HTML text formatting:  
                    <ul className="flex flex-col gap-1 ">
                        <li> <code>&lt;b&gt;</code> - Bold text  </li>
                        <li> <code>&lt;strong&gt;</code> - Important text  </li>
                        <li> <code>&lt;i&gt;</code> - Italic text  </li>
                        <li> <code>&lt;em&gt;</code> - Emphasized text and italic text  </li>
                        <li> <code>&lt;mark&gt;</code> - Marked text or highlighted text  </li>
                        <li> <code>&lt;small&gt;</code> - Smaller text  </li>
                        <li> <code>&lt;del&gt;</code> - Deleted text or strikethrough text  </li>
                        <li> <code>&lt;ins&gt;</code> - Inserted text and underline text  </li>
                        <li> <code>&lt;sub&gt;</code> - Subscript text  </li>
                        <li> <code>&lt;sup&gt;</code> - Superscript text  </li>
                    </ul>
                  </li>
                <li>  HTML quotation and citation:  
                    <ul className="flex flex-col gap-1">
                        <li> <code>&lt;blockquote&gt;</code> element defines a section that is quoted from another source, usually
                            indent <code>&lt;blockquote&gt;</code> elements  </li>
                        <li> <code>&lt;q&gt;</code> tag defines a short quotation, insert quotation marks around the quotation.  </li>
                        <li> <code>&lt;abbr&gt;</code> tag defines an abbreviation or an acronym, usually global title attribute
                            is used to show description for abbreviation when you mouse over the element  </li>
                        <li> <code>&lt;address&gt;</code> tag defines the contact information for the author/owner of a document
                            or an article, usually renders in <em>italic,</em> and browsers will always add a line break before
                            and after the <code>&lt;address&gt;</code> element  </li>
                        <li> <code>&lt;cite&gt;</code> tag defines the title of a creative work  </li>
                        <li> <code>&lt;bdo&gt;</code> tag is used to override the current text direction  </li>
                    </ul>
                  </li>
                <li>  HTML CSS:   Cascading Style Sheets is used to format the layout of a webpage
                    <ul className="flex flex-col gap-1">
                        <li> Inline: using <code>style</code> attribute inside the HTML element  </li>
                        <li> Internal: using <code>style</code> element in the <code>head</code> section  </li>
                        <li> External: using <code>link</code> element to link to an external CSS file  </li>
                    </ul>
                  </li>
                <li>  HTML Links or hyperlinks:   <code>&lt;a&gt;&lt;/a&gt;</code>
                    <ul className="flex flex-col gap-1">
                        <li>  target   attribute specifies where to open the linked document
                            <ul className="pl-5">
                                <li> <code>_self</code> - Default. Opens the document in the same window/tab as it was clicked  </li>
                                <li> <code>_blank</code> - Opens the document in a new window or tab  </li>
                                <li> <code>_parent</code> - Opens the document in the parent frame  </li>
                                <li> <code>_top</code> - Opens the document in the full body of the window  </li>
                            </ul>
                          </li>
                        <li> Use the  mailto:   scheme inside the <code>href</code> attribute to create a link that opens
                            the user's email program  </li>
                    </ul>
                  </li>
                <li>  HTML Link colors:  
                    <ul className="flex flex-col gap-1">
                        <li> An <strong>unvisited</strong> link is <strong>underlined</strong> and <strong>blue</strong>  </li>
                        <li> A <strong>visited</strong> link is <strong>underlined</strong> and <strong>purple</strong>  </li>
                        <li> An <strong>active</strong> link is <strong>underlined</strong> and <strong>red</strong>  </li>
                    </ul>
                  </li>
                <li> HTML Link Bookmarks: To create a bookmark - first create the bookmark, then add a link to it. When the link
                    is clicked, the page will scroll down or up to the location with the bookmark.
                    <pre>
                        <div className="eg">

                            &lt;p&gt;&lt;a href="#C4"&gt;Jump to Chapter 4&lt;/a&gt;&lt;/p&gt;
                            &lt;p&gt;&lt;a href="#C6"&gt;Jump to Chapter &lt;/a&gt;&lt;/p&gt;

                            <br />

                            &lt;  li&gt;Chapter 1&lt;/  li&gt;
                            &lt;p&gt;This chapter explains ba bla bla&lt;/p&gt;

                            <br />

                            &lt;  li&gt;Chapter 2&lt;/  li&gt;
                            &lt;p&gt;This chapter explains ba bla bla&lt;/p&gt;

                            <br />

                            &lt;  li&gt;Chapter 3&lt;/  li&gt;
                            &lt;p&gt;This chapter explains ba bla bla&lt;/p&gt;
                            <br />

                            &lt;  li id="C4"&gt;Chapter 4&lt;/  li&gt;
                            &lt;p&gt;This chapter explains ba bla bla&lt;/p&gt;
                            <br />

                            &lt;  li&gt;Chapter 5&lt;/  li&gt;
                            &lt;p&gt;This chapter explains ba bla bla&lt;/p&gt;
                            <br />

                            &lt;  li id="C6"&gt;Chapter 6&lt;/  li&gt;
                            &lt;p&gt;This chapter explains ba bla bla&lt;/p&gt;

                        </div>
                    </pre>
                  </li>
                <li>  HTML images:   <code>&lt;img src="" alt="" width="" height=""&gt;&lt;/img&gt;</code> used to embed an image in a web page
                    <ul className="flex flex-col gap-1">
                        <li> src attribute  </li>
                        <li> alt attribute  </li>
                        <li> width attribute  </li>
                        <li> height attribute  </li>
                    </ul>
                  </li>
                <li>  HTML Image Map:   <a href="https://www.w3schools.com/html/html_images_imagemap.asp" className=" underline underline-offset-2">
                    https://www.w3schools.com/html/html_images_imagemap.asp
                </a>  </li>
                <li>  HTML Background images:   using style attribute
                    <ul className="flex flex-col gap-1">
                        <li> <code>background-image: url(’example.jpg’)</code>  </li>
                        <li> <code>background-repeat: repeat or no-repeat</code> used to either repeat or not repeat the image  </li>
                        <li> <code>background-size: cover</code> used to cover image to entire element  </li>
                        <li> <code>background-size: 100% 100%</code> used to stretch image totally  </li>
                        <li> <code>background-attachment: fixed</code> to make sure the entire element is always covered  </li>
                    </ul>
                  </li>
                <li>  HTML Picture:   gives web developers more flexibility in specifying image resources,
                    <pre>
                        <code>
                            &lt;picture&gt;
                            <br />
                            &lt;source media="(min-width: 650px)" srcset="img_food.jpg"&gt;
                            <br />
                            &lt;source media="(min-width: 465px)" srcset="img_car.jpg"&gt;
                            <br />
                            &lt;img src="img_girl.jpg"&gt;
                            <br />
                            &lt;/picture&gt;
                        </code>
                    </pre>
                  </li>
                <li>  HTML favicon:   it is a <strong>small image displayed next to page title</strong> in the browser tab
                    <pre>
                        <code>
                            &lt;head&gt;
                            &lt;title&gt;My Page Title&lt;/title&gt;
                            &lt;link rel="icon" type="image/x-icon" href="/images/favicon.ico"&gt;
                            &lt;/head&gt;
                        </code>
                    </pre>
                  </li>
                <li>  HTML page title    </li>
                <li>  HTML Tables:   <a href="https://www.w3schools.com/html/html_tables.asp" className="underline underline-offset-2">https://www.w3schools.com/html/html_tables.asp</a>
                    <pre>
                        <div className="eg">
                            &lt;table&gt; <br />
                            &lt;tr&gt; 
                            &lt;th&gt;Company&lt;/th&gt;
                            &lt;th&gt;Contact&lt;/th&gt;
                            &lt;/tr&gt; <br />
                            &lt;tr&gt;
                            &lt;td&gt;Alfreds Futterkiste&lt;/td&gt;
                            &lt;td&gt;Maria Anders&lt;/td&gt;
                            &lt;/tr&gt; <br />
                            &lt;/table&gt;
                        </div>
                    </pre>
                    <ul className="flex flex-col gap-1 pl-10">
                        <li> <code>th</code> stands for table header  </li>
                        <li> <code>td</code> stands for table data  </li>
                        <li> <code>tr</code> stands for table row  </li>
                        <li> <code>colspan</code> and <code>rowspan</code>  </li>
                    </ul>
                  </li>
                <li>  HTML lists  
                    <ul className="flex flex-col gap-1">
                        <li> Unordered list <code>&lt;ul&gt; &lt;li&gt;</code>  </li>
                        <li> Ordered list <code>&lt;ol&gt; &lt;li&gt;</code>  </li>
                        <li> HTML description lists: it is a list of terms, with a description of each term
                            <pre>
                                <code>
                                    &lt;dl&gt;
                                    &lt;dt&gt;Coffee&lt;/dt&gt;
                                    &lt;dd&gt;- black hot drink&lt;/dd&gt;
                                    &lt;dt&gt;Milk&lt;/dt&gt;
                                    &lt;dd&gt;- white cold drink&lt;/dd&gt;
                                    &lt;/dl&gt;
                                </code>
                            </pre>
                          </li>
                    </ul>
                  </li>
                <li>  HTML block and inline elements  
                    <ul className="flex flex-col gap-1 pl-10">
                        <li> Every HTML element has a default value, depending on what type of element it is, the two most common display values are block and inline  </li>
                        <li> <strong>Block-level elements</strong>
                            <ul>
                                <li> a block-level elements always starts on a new line, and the browsers automatically add some
                                    space or margin before and after the element  </li>
                                <li> a block level element always takes up the full width available  </li>
                                <li> two commonly used block elements are <code>&lt;p&gt;</code> and <code>&lt;div&gt;</code>  </li>
                            </ul>
                          </li>
                        <li> <strong>Inline elements</strong>
                            <ul>
                                <li> an inline element does not start on a new line, only takes up as much width as necessary  </li>
                                <li> <code>&lt;span&gt;</code> element is one of the example  </li>
                            </ul>
                          </li>
                    </ul>
                  </li>
                <li>  HTML div element:   used as a container for other HTML elements,
                    <ul>
                        <li> by default it is a block element, takes all available width, and comes with line breaks before and
                            after,  </li>
                        <li> it has no required attributes but style, class and id are common  </li>
                    </ul>
                  </li>
                <li>  HTML class attribute  
                    <ul>
                        <li> it is used to specify a class for an HTML element  </li>
                        <li> multiple HTML elements can share the same class  </li>
                    </ul>
                  </li>
                <li>  HTML id attribute  
                    <ul>
                        <li> it is used to specify a unique id for an HTML element  </li>
                        <li> you cannot have more than one element with the same id in an HTML document  </li>
                        <li> for HTML bookmarks we use id so that when a link is clicked, the page will scroll to the location
                            with the bookmark  </li>
                    </ul>
                  </li>
                <li>  HTML Iframes  
                    <ul className="flex flex-col gap-1">
                        <li> it is used to display a web page within a webpage  </li>
                        <li> &lt;iframe&gt; tag specifies an inline frame
                            <pre>
                                <code className="eg">
                                    &lt;iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"&gt;&lt;/iframe&gt;
                                </code>
                            </pre>
                          </li>
                    </ul>
                  </li>
                <li>  HTML head  
                    <ul className="flex flex-col gap-1">
                        <li> <code>&lt;head&gt;</code> element is a container for the following elements: <code>&lt;title&gt;</code>,
                            <code>&lt;style&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, and
                            <code>&lt;base&gt;</code>  </li>
                        <li> The <code>&lt;head&gt;</code> element is a container for metadata (data about data) and is placed between
                            the <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag.  </li>
                        <li> HTML metadata is data about the HTML document. Metadata is not displayed.  </li>
                        <li> Metadata typically define the document title, character set, styles, scripts, and other meta
                            information.  </li>
                    </ul>
                  </li>
                <li>  HTML title    </li>
                <li>  HTML style    </li>
                <li>  HTML link:   defines the relationship between the current document and an external resource, it most often
                    used to link external style sheets  </li>
                <li>  HTML meta :   the meta element is typically used to specify the character set, page description, keywords,
                    author of the document and viewport settings  </li>
                <li>  HTML responsive web design    </li>
                <li>  HTML versus XHTML  
                    <ul className="flex flex-col gap-1">
                        <li> XHTML stands for Extensible HyperText Markup Language  </li>
                        <li> XHTML is a stricter and cleaner version of HTML  </li>
                        <li> XHTML is an XML application, and XHTML documents are XML documents  </li>
                        <li> HTML5 is just HTML, it is not XHTML  </li>
                        <li> in XHTML the tags must be properly nested, in HTML it is not necessary  </li>
                        <li> XHTML tags must be in lowercase  </li>
                        <li> XHTML documents must have one root element  </li>
                        <li> XHTML documents must be well-formed  </li>
                    </ul>
                  </li>
            </ul>


        </div>
    )
}

export default Html;