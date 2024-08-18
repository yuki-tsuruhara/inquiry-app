import * as React from "react";

interface EmailTemplateProps {
  username: string;
  email: string;
  content: string;
}

export const InquiryTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  content,
}) => (
  <div>
    <p>user: {username}</p>
    <p>email: {email}</p>
    <p>content: {content}</p>
  </div>
);
