import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Badge from "./components/Badges/Badge";
import Banner from "./components/Banners/index";
import Card from "./components/Cards/index";
import Testimonial from "./components/Testimonials/Testimonial/index";
import TestimonialWithImage from "./components/Testimonials/TestimonialWithImage/index";
import Tooltip from "./components/Tooltips/index";
import TooltipWrapper from "./components/Tooltips/TooltipWrapper";
import Toast from "./components/Toasts/index";
import { BsPencil } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorState } from "@codemirror/state";
import { nanoid } from "nanoid";

function App() {
  const toastId = nanoid()
  const toastId2 = nanoid()
  const toastId3 = nanoid()
  const toastId4 = nanoid()
  return (
    <>
      <Header />
      <div className="main">
        <section id="section--badges">
          <h1>Badges</h1>
          <h4>Square</h4>
          <div className="badges">
            <Badge color="gray">Gray</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="yellow">Yellow</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="blue">Blue</Badge>
            <Badge color="indigo">Indigo</Badge>
            <Badge color="purple">Purple</Badge>
            <Badge color="pink">Pink</Badge>
          </div>
          <h4>Usage</h4>
          <div className="editor">
            <CodeMirror
              value={`<Badge color="gray">Badge</Badge>`}
              height="30px"
              theme={"dark"}
              extensions={[
                javascript({ jsx: true }),
                EditorState.readOnly.of(true),
              ]}
            />
          </div>
          <hr />
          <h4>Pill</h4>
          <div className="badges">
            <Badge color="gray" shape="pill">
              Gray
            </Badge>
            <Badge color="red" shape="pill">
              Red
            </Badge>
            <Badge color="yellow" shape="pill">
              Yellow
            </Badge>
            <Badge color="green" shape="pill">
              Green
            </Badge>
            <Badge color="blue" shape="pill">
              Blue
            </Badge>
            <Badge color="indigo" shape="pill">
              Indigo
            </Badge>
            <Badge color="purple" shape="pill">
              Purple
            </Badge>
            <Badge color="pink" shape="pill">
              Pink
            </Badge>
          </div>
          <h4>Usage</h4>
          <div className="editor">
            <CodeMirror
              value={`<Badge color="gray" shape="pill">Badge</Badge>`}
              height="30px"
              theme={"dark"}
              extensions={[
                javascript({ jsx: true }),
                EditorState.readOnly.of(true),
              ]}
            />
          </div>
        </section>

        <section id="section--banners">
          <h1>Banners</h1>
          <div className="banners">
            <h3>Multi line</h3>
            <h4>Success</h4>
            <Banner status="success">
              <Banner.Heading>Congratulations!</Banner.Heading>
              <Banner.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                pariatur, ipsum similique veniam.
              </Banner.Text>
            </Banner>
            <h4>Warning</h4>
            <Banner status="warning">
              <Banner.Heading>Attention</Banner.Heading>
              <Banner.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
              </Banner.Text>
            </Banner>
            <h4>Error</h4>
            <Banner status="error">
              <Banner.Heading>
                There is a problem with your application
              </Banner.Heading>
              <Banner.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
              </Banner.Text>
            </Banner>
            <h4>Neutral</h4>
            <Banner status="neutral">
              <Banner.Heading>Update available</Banner.Heading>
              <Banner.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                pariatur, ipsum similique veniam.
              </Banner.Text>
            </Banner>
          </div>
          <h4>Usage</h4>
          <div className="editor">
            <CodeMirror
              value={`<Banner status="success">\n   <Banner.Heading>\n      Congratulations!\n   </Banner.Heading>\n   <Banner.Text>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.\n   </Banner.Text>\n</Banner>`}
              height="190px"
              theme={"dark"}
              extensions={[
                javascript({ jsx: true }),
                EditorState.readOnly.of(true),
              ]}
            />
          </div>
          <hr />
          <div className="banners">
            <h3>Single line</h3>
            <h4>Success</h4>
            <Banner status="success">
              <Banner.Heading>Congratulations!</Banner.Heading>
            </Banner>
            <h4>Warning</h4>
            <Banner status="warning">
              <Banner.Heading>Attention</Banner.Heading>
            </Banner>
            <h4>Error</h4>
            <Banner status="error">
              <Banner.Heading>
                There is a problem with your application
              </Banner.Heading>
            </Banner>
            <h4>Neutral</h4>
            <Banner status="neutral">
              <Banner.Heading>Update available</Banner.Heading>
            </Banner>
          </div>
          <h4>Usage</h4>
          <div className="editor">
            <CodeMirror
              value={`<Banner status="success">\n   <Banner.Heading>\n      Congratulations!\n   </Banner.Heading>\n</Banner>`}
              height="125px"
              theme={"dark"}
              extensions={[
                javascript({ jsx: true }),
                EditorState.readOnly.of(true),
              ]}
            />
          </div>
        </section>

        <section id="section--cards">
          <h1>Cards</h1>
          <div className="cards">
            <Card>
              <Card.Icon color="#FF33F3">{<BsPencil />}</Card.Icon>
              <Card.Content>
                <Card.Header>Easy Deployment</Card.Header>
                <Card.Text>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </Card.Text>
              </Card.Content>
            </Card>
          </div>
          <h4>Usage</h4>
          <CodeMirror
            value={`<Card>\n   <Card.Icon color="#FF33F3">\n      {<BsPencil />}\n   </Card.Icon>\n   <Card.Content>\n      <Card.Header>\n         Easy Deployment\n      </Card.Header>\n      <Card.Text>\n         Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.\n      </Card.Text>\n   </Card.Content>\n</Card>`}
            height="300px"
            theme={"dark"}
            extensions={[
              javascript({ jsx: true }),
              EditorState.readOnly.of(true),
            ]}
          />
        </section>

        <section id="section--testimonials">
          <h1>Testimonials</h1>
          <div className="testimonials">
            <h3>Without image</h3>
            <Testimonial>
              <Testimonial.Logo>
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzeAgZMrQ3Q1q5nDuqwjuI83xIhATRvMFeNgnKmd3LKyQCHbwy"
                  alt="logo"
                />
              </Testimonial.Logo>
              <Testimonial.Quote>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </Testimonial.Quote>
              <Testimonial.Source>
                <Testimonial.Name>May Anderson</Testimonial.Name>
                <Testimonial.Title>Workcation, CTO</Testimonial.Title>
              </Testimonial.Source>
            </Testimonial>
          </div>
          <h4>Usage</h4>
          <CodeMirror
            value={`<Testimonial>\n   <Testimonial.Logo>\n      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzeAgZMrQ3Q1q5nDuqwjuI83xIhATRvMFeNgnKmd3LKyQCHbwy" alt="logo"/>\n   </Testimonial.Logo>\n   <Testimonial.Quote>\n      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”\n   </Testimonial.Quote>\n   <Testimonial.Source>\n      <Testimonial.Name>\n         May Anderson\n      </Testimonial.Name>\n      <Testimonial.Title>\n         Workcation, CTO\n      </Testimonial.Title>\n   </Testimonial.Source>\n</Testimonial>`}
            height="370px"
            theme={"dark"}
            extensions={[
              javascript({ jsx: true }),
              EditorState.readOnly.of(true),
            ]}
          />
          <hr />
          <div className="testimonials">
            <h3>With image</h3>
            <TestimonialWithImage>
              <TestimonialWithImage.Image
                src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image-person"
              />
              <TestimonialWithImage.Source>
                <TestimonialWithImage.Quote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  urna nulla vitae laoreet augue. Amet feugiat est integer dolor
                  auctor adipiscing nunc urna, sit.
                </TestimonialWithImage.Quote>
                <TestimonialWithImage.Name>
                  May Andersons
                </TestimonialWithImage.Name>
                <TestimonialWithImage.Title>
                  Workcation, CTO
                </TestimonialWithImage.Title>
              </TestimonialWithImage.Source>
            </TestimonialWithImage>
          </div>
          <h4>Usage</h4>
          <CodeMirror
            value={`<TestimonialWithImage>\n   <TestimonialWithImage.Image src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-person"/>\n   <TestimonialWithImage.Source>\n      <TestimonialWithImage.Quote>\n         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.\n      </TestimonialWithImage.Quote>\n      <TestimonialWithImage.Name>\n         May Andersons\n      </TestimonialWithImage.Name>\n      <TestimonialWithImage.Title>\n         Workcation, CTO\n      </TestimonialWithImage.Title>\n   </TestimonialWithImage.Source>\n</TestimonialWithImage>`}
            height="325px"
            theme={"dark"}
            extensions={[
              javascript({ jsx: true }),
              EditorState.readOnly.of(true),
            ]}
          />
        </section>

        <section id="section--tooltips">
          <h1>Tooltips</h1>
          <div className="tooltips">
            <h3>Light</h3>
            <h4>Normal</h4>
            <TooltipWrapper>
              <Tooltip themeMode="light" themeColor="normal">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
            <h4>Blue</h4>
            <TooltipWrapper>
              <Tooltip themeMode="light" themeColor="blue">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
            <h4>Pink</h4>
            <TooltipWrapper>
              <Tooltip themeMode="light" themeColor="pink">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
            <h4>Green</h4>
            <TooltipWrapper>
              <Tooltip themeMode="light" themeColor="green">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
          </div>
          <h4>Usage</h4>
          <CodeMirror
            value={`<TooltipWrapper>\n   <Tooltip themeMode="light" themeColor="normal">\n      <Tooltip.Heading>\n         <Tooltip.Icon>\n            <HiOutlineInbox />\n         </Tooltip.Icon>\n         <Tooltip.Title>\n            Archive notes\n         </Tooltip.Title>\n      </Tooltip.Heading>\n      <Tooltip.Text>\n         Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.\n      </Tooltip.Text>\n   </Tooltip>\n   <Tooltip.Element>\n      <button>Hover me</button>\n   </Tooltip.Element>\n</TooltipWrapper>`}
            height="415px"
            theme={"dark"}
            extensions={[
              javascript({ jsx: true }),
              EditorState.readOnly.of(true),
            ]}
          />
          <hr />
          <div className="tooltips">
            <h3>Bold</h3>
            <h4>Normal</h4>
            <TooltipWrapper>
              <Tooltip themeMode="bold" themeColor="normal">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
            <h4>Blue</h4>
            <TooltipWrapper>
              <Tooltip themeMode="bold" themeColor="blue">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
            <h4>Pink</h4>
            <TooltipWrapper>
              <Tooltip themeMode="bold" themeColor="pink">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
            <h4>Green</h4>
            <TooltipWrapper>
              <Tooltip themeMode="bold" themeColor="green">
                <Tooltip.Heading>
                  <Tooltip.Icon>
                    <HiOutlineInbox />
                  </Tooltip.Icon>
                  <Tooltip.Title>Archive notes</Tooltip.Title>
                </Tooltip.Heading>
                <Tooltip.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </Tooltip.Text>
              </Tooltip>
              <Tooltip.Element>
                <button>Hover me</button>
              </Tooltip.Element>
            </TooltipWrapper>
          </div>
          <h4>Usage</h4>
          <CodeMirror
            value={`<TooltipWrapper>\n   <Tooltip themeMode="bold" themeColor="normal">\n      <Tooltip.Heading>\n         <Tooltip.Icon>\n            <HiOutlineInbox />\n         </Tooltip.Icon>\n         <Tooltip.Title>\n            Archive notes\n         </Tooltip.Title>\n      </Tooltip.Heading>\n      <Tooltip.Text>\n         Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.\n      </Tooltip.Text>\n   </Tooltip>\n   <Tooltip.Element>\n      <button>Hover me</button>\n   </Tooltip.Element>\n</TooltipWrapper>`}
            height="415px"
            theme={"dark"}
            extensions={[
              javascript({ jsx: true }),
              EditorState.readOnly.of(true),
            ]}
          />
        </section>

        <section id="section--toasts">
          <h1>Toasts</h1>
          <div className="toasts">
            <h3>Success</h3>
            <form data-toast-id={toastId}>
              <button type="submit">Submit</button>
            </form>
            <Toast status="success" positionx="left" positiony="top" id={toastId}>
              <Toast.Heading>Success</Toast.Heading>
              <Toast.Text>Your work has been saved</Toast.Text>
            </Toast>
            <h3>Warning</h3>
            <form data-toast-id={toastId2}>
              <button type="submit">Submit</button>
            </form>
            <Toast status="warning" positionx="left" positiony="bottom" id={toastId2}>
              <Toast.Heading>Warning</Toast.Heading>
              <Toast.Text>A network error was detected</Toast.Text>
            </Toast>
            <h3>Information</h3>
            <form data-toast-id={toastId3}>
              <button type="submit">Submit</button>
            </form>
            <Toast status="info" positionx="right" positiony="top" id={toastId3}>
              <Toast.Heading>Information</Toast.Heading>
              <Toast.Text>Please read updated information</Toast.Text>
            </Toast>
            <h3>Error</h3>
            <form data-toast-id={toastId4}>
              <button type="submit">Submit</button>
            </form>
            <Toast status="error" positionx="right" positiony="bottom" id={toastId4}>
              <Toast.Heading>Error</Toast.Heading>
              <Toast.Text>Please re-save your work again</Toast.Text>
            </Toast>
          </div>
          <h4>Usage</h4>
          <CodeMirror
            value={`<form data-toast-id={yourId}>\n   <button type="submit">Submit</button>\n</form>\n<Toast status="success" positionx="left" positiony="top" id={yourId}> //Same id as the form\n   <Toast.Heading>\n      Success\n   </Toast.Heading>\n   <Toast.Text>\n      Your work has been saved\n   </Toast.Text>\n</Toast>`}
            height="260px"
            theme={"dark"}
            extensions={[
              javascript({ jsx: true }),
              EditorState.readOnly.of(true),
            ]}
          />
        </section>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
