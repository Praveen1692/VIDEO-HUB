import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        {/* alignItems={'stretch'} w="full" px={'4'} */}
        <VStack alignItems={'stretch'} w="full" px={'4'}>
          <Heading size="md" textTransform={'uppercase'}>
            Subscribe to get news update
          </Heading>
          <HStack>
            <Input
              placeholder="Enter Your Email..."
              border={'none'}
              borderRadius={'none'}
              outline="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'} borderRight={['none', '1px solid white']}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="purple">
            {' '}
            <a href="https://youtube.com/skycoder" target={'_blank'}>
              YouTube
            </a>{' '}
          </Button>


          <Button variant={'link'} colorScheme="purple">
            {' '}
            <a href="https://www.instagram/praveensharma8822" target={'_blank'}>
              Instagram
            </a>{' '}
          </Button>



          <Button variant={'link'} colorScheme="purple">
            {' '}
            <a href="https://github/Praveen1692" target={'_blank'}>
              GitHub
            </a>{' '}
          </Button>


        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
