import React, { useEffect, useState } from "react";
import "../../Style/Topic.css";
import NavbarAfter from "../../model/NavbarAfter";

import Markdown from "markdown-to-jsx";
import { Link, useLocation } from "react-router-dom";

export default function Topic() {
  const [postContent, setPostcontent] = useState("");
  const name = useLocation().state?.TopicName;
  const count = useLocation().state?.count;
  const name1 = useLocation().state?.subjectName;
  const name2 = useLocation().state?.semNumber;

  const [ChapterName, setChapterName] = useState(name);
  const [num, setnum] = useState(count);
  const [subjectName, setsubjectName] = useState(name1);
  const [semNumber, setsemNumber] = useState(name2);

  const [videoId, setvideoId] = useState();
  const [fileName, setfileName] = useState();

  // const file_name = 'First.md';
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`./MarkDownFiles/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  const allSubjects = {
    1: {
      Java: {
        cp1: ["Rolls_theorem", "Chachys_theorem", "xyz_theorem", "abc_theorem"],
        cp2: ["lkm_theorem", "devivations", "integrations", "calculations"],
      },
      DBMS: {
        cp6: ["Normalization", "constraints", "rules", "sql queries"],
        cp7: ["lkm theorem", "plsql", "oops", "deadlock"],
      },
    },
  };

 
  const allTopics = {
    Rolls_theorem: ["Topic1", "Topic2", "Topic3"],
    Chachys_theorem: ["Topic4", "Topic5", "Topic6"],
    xyz_theorem: ["Topic1", "Topic2", "Topic3"],
    abc_theorem: ["Topic1", "Topic2", "Topic3"],
  };

  const allMdFiles = {
    Topic1: "First.md",
    Topic2: "Second.md",
  };

  return (
    <div>
      <NavbarAfter />
      <div
        style={{
          position: "fixed",
          top: "0",
          marginTop: "60px",
          paddingLeft: "50%",
          backgroundColor: "#12181C",
          width: "100%",
          marginLeft: "-10px",
          paddingTop: "50px",
        }}
      >
        <h1 style={{ color: "#8685EF" }}>
          UNIT 0{num}-{ChapterName}
        </h1>
        {/* <Link to="/Chapter"><img src="backarrow.png" style={{paddingRight:"400px"}} ></img></Link>  */}
      </div>

      <div className="Main_Part9">
        <div className="left_part">
          {allSubjects[semNumber][subjectName][ChapterName].map((e) => {
            return (
              <div>
                <div className="left_sub_part">
                  <img
                    src="Topic.png"
                    width="32px"
                    height="38px"
                    style={{ marginTop: "20px" }}
                  ></img>
                  <p className="TopicName">{e}</p>
                </div>
                {allTopics[e].map((e1) => {
                  return (
                    <div>
                      <p
                        className="TopicIntro"
                        onClick={() => setfileName(allMdFiles[e1])}
                      >
                        <img
                          src="Circle.png"
                          style={{ paddingRight: "10px" }}
                        ></img>{" "}
                        {e1}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="right_part">
          <Markdown>{post}</Markdown>
        </div>
      </div>
    </div>
  );
}
