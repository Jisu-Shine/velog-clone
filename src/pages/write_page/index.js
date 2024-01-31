import React, { useState } from "react";
import styled from "styled-components";
import Background from "../../components/Background";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/react-editor";

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); 

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (editor) => {
    const editorValue = editor.getMarkdown();
    setContent(editorValue);
  };

  const handleExitButtonClick = () => {
    navigate('/'); // 나가기 버튼 클릭 시 homepage로 이동
  };

  return (
    <Background>
      <WriteContainer>
        <WriteTitle
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={handleTitleChange}
        />
        <Div />
        <Editor
              height="100%"
              initialValue="# 제목을 입력하세요"
              // placeholder="당신의 이야기를 적어보세요..."
              previewStyle={window.innerWidth > 1000 ? "vertical" : "tab"}
              initialEditType="markdown"
              hideModeSwitch={true}
              toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["table", "image", "link"],
                ["code", "codeblock"],
                ["scrollSync"],
              ]}
              theme="dark"
              usageStatistics={false}
          />
        
      </WriteContainer>
      <BottomContainer>
        <ExitButton onClick={handleExitButtonClick}>
          <IoArrowBack /> 나가기
        </ExitButton>
        <PublishButton>출간하기</PublishButton>
      </BottomContainer>
    </Background>
  );
};

const WriteContainer = styled.div`
  width: 50%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WriteTitle = styled.input`
  color: white;
  background-color: transparent;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 50px;
  font-weight: bold;
  border: none;
  outline: none;
  caret-color: white;
`;

const Div = styled.div`
  background-color: #495058;
  width: 100%;
  height: 8px;
`;

const WriteContent = styled.textarea`
  color: white;
  background-color: transparent;
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 24px;
  border: none;
  outline: none;
  caret-color: white;
  resize: none;
`;

const BottomContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 10%;
  background-color: #2e2e2e;
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ExitButton = styled.button`
  height: 60%;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 30px;
  transition: background-color 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: #434343;
  }
`;

const PublishButton = styled.button`
  height: 60%;
  color: black;
  background-color: #63E6BE;
  border: none;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 30px;
  transition: background-color 0.3s;
  border-radius: 10px;
  margin-left: auto;

  &:hover {
    background-color: #434343;
  }
`;


export default WritePage;
