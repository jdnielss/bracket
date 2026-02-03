import { Button } from '@mantine/core';

export default function SaveButton(props: any) {
  return (
    <Button color="brand" size="md" mb="10px" mx="10px" {...props}>
      {props.title}
    </Button>
  );
}
