import { Card, Skeleton } from "@chakra-ui/react";

const SkeletonScr = () => {
  return (
    <Skeleton width="100%" height="100%" border="5px solid">
      <Card width="100%" height="100%" border="5px solid"></Card>
    </Skeleton>
  );
};

export default SkeletonScr;
