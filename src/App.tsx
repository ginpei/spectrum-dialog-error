import {
  ActionButton,
  Button,
  ButtonGroup,
  Content,
  defaultTheme,
  Dialog,
  DialogTrigger,
  Divider,
  Heading,
  Provider,
  Text,
} from "@adobe/react-spectrum";
import React from "react";

const App: React.VFC = () => {
  return (
    <Provider theme={defaultTheme}>
      <div className="App">
        <h1>App</h1>
        <p>
          <DialogButton1 />
        </p>
        <p>
          <DialogButton2 />
        </p>
        <p>
          <DialogButton3 />
        </p>
      </div>
    </Provider>
  );
};

export default App;

const DialogButton1: React.FC = () => {
  return (
    <DialogTrigger type="popover">
      <ActionButton>Disk Status</ActionButton>
      <Dialog>
        <Heading>C://</Heading>
        <Divider />
        <Content>
          <Text>50% disk space remaining.</Text>
        </Content>
      </Dialog>
    </DialogTrigger>
  );
};

const DialogButton2: React.FC = () => {
  return (
    <DialogTrigger>
      <ActionButton>Checkout</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Confirm checkout?</Heading>
          <Divider />
          <Content>
            <Text>You have 5 items in your cart. Proceed to checkout?</Text>
          </Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>
              Cancel
            </Button>
            <Button variant="cta" onPress={close} autoFocus>
              Confirm
            </Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  );
};

const DialogButton3: React.FC = () => {
  return (
    <DialogTrigger type="modal">
      <ActionButton>Unlink</ActionButton>
      {(close) => (
        <Dialog>
          <Heading>Unlinking email</Heading>
          <Divider />
          <Content>
            <Text>
              This will unlink your email from your profile "TestUser". Are you
              sure?
            </Text>
          </Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>
              Cancel
            </Button>
            <Button variant="cta" onPress={close} autoFocus>
              Confirm
            </Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  );
};
