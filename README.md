# react-toast-lite

The `react-toast-lite` is a lightweight, easy-to-use toast notification component for React applications. It provides a simple way to display brief messages in the form of toast notifications, which can be used to inform users about the success, error, or status of an operation.

## Key Features

-   **Lightweight and Simple** : Designed to be minimalistic and straightforward, focusing on performance and ease of use.

-   **Customizable Positioning** : Allows you to specify the position of the toast notification on the screen.

-   **Auto-hide Functionality** : Toast notifications automatically disappear after a set duration.

-   **Dynamic Color Change Based on Action Type**: The component supports dynamic color changes based on the action type (`info`, `error`, `success`). This allows for a more intuitive visual feedback depending on the nature of the error or message being displayed.

## Usage / Example

```jsx
import React, { useState } from "react";
import { ToastLite } from "react-toast-lite";

function App() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>Show Toast</button>
            <ToastLite
                open={isOpen}
                message='This is a toast message!'
                action='info'
                position='bottom-right'
            />
        </div>
    );
}

export default App;
```

## Screenshots

<img width="637" alt="success_toast" src="https://github.com/user-attachments/assets/8a118177-97d7-4ace-a386-66685df42cdd">

<img width="637" alt="info_toast" src="https://github.com/user-attachments/assets/0d10d66b-fbfa-4b5c-83c4-5c8f6f59c5f5">

<img width="637" alt="error_toast" src="https://github.com/user-attachments/assets/f26194cd-4100-49dd-8024-1cee6a7a674b">



## Props

The following props are expected:

| Props    | Required |                        Value                        |   Default    |
| -------- | :------: | :-------------------------------------------------: | :----------: |
| open     |  `true`  |                      `boolean`                      |   `false`    |
| message  |  `true`  |                      `string`                       |
| position | `false`  |                                                     | `top-center` |
| action   | `false`  | **info** or **success** or **warning** or **error** |    `info`    |
| duration | `false`  |     **0** or **3** or **5** or **8** or **10**      |     `5`      |

duration **0** means the toast won't close automatically, but we can click the close button to close it manually.

position value can be **top-center** or **top-left** or **top-right** or **bottom-center** or **bottom-left** or **bottom-right**
