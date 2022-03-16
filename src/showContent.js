import { useState } from "react";

const ShowContent = (component, visibility = false) => {
  const [visible, setVisible] = useState(() => visibility);

  return [visible ? component : null, () => setVisible((v) => !v)];
};

export default ShowContent;
