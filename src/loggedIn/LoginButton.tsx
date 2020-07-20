/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react";
import auth from "solid-auth-client";

interface Props {
  popupUrl: string;
  children?: React.ReactElement;
  authOptions?: any;
  onLogin(): void;
}

const LoginButton: React.FC<Props> = (props: Props) => {
  // eslint-disable-next-line react/prop-types
  const { popupUrl, children, authOptions, onLogin } = props;
  const options = authOptions || { popupUri: popupUrl };
  async function LoginHandler() {
    auth
      .popupLogin(options)
      .then(() => {
        onLogin();
      })
      .catch((err) => console.log(err));
  }
  return children ? (
    <div onClick={LoginHandler}>
      {children}
    </div>
  ) : (
    <button onClick={LoginHandler}>Log In</button>
  );
};

export default LoginButton;
