import { Button, Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';

import styled from 'styled-components';

import { PaginationResult } from '~/domains/PaginationResult';
import { Post } from '~/domains/Post';

import { cmsClient } from '~/lib/api';

import { DefaultLayout } from '~/components/parts/layouts/DefaultLayout';
import { PostCard } from '~/components/domains/Post';
import { Link } from '~/components/parts/commons/Link';
import { OgpHead } from '~/components/parts/layouts/OgpHead';
import { IMAGE_PATH } from '~/constants/imagePath';

type Props = {
  recentPosts: Post[];
};

const Index = ({ recentPosts }: Props) => {
  return (
    <DefaultLayout>
      <OgpHead title="Zawalog | Top" />
      <Container sm css={{ pt: '$12' }}>
        <Text h3>๐ Welcome to Zawalog ๐</Text>
        <Text css={{ my: '$4' }}>Zawalog ใฏใ itizawa ใฎใใญใฐๅผใขใฆใใใใใใพใจใใ็ตฑๅใตใคใใงใ</Text>
        <Image src={IMAGE_PATH.OGP} width={1200} height={630} alt="image-ogp-top" />
        <Text css={{ my: '$4', textAlign: 'center', borderBottom: '$secondary solid 1px', fontWeight: '$bold' }}>้็บๆฅ่ช</Text>
        <Grid.Container gap={2}>
          {recentPosts.map((post, index) => {
            return (
              <StyledGrid key={index} xs={12} css={{ px: '0', pb: '0' }}>
                <Link href={`/posts/${post.id}`}>
                  <PostCard post={post} />
                </Link>
              </StyledGrid>
            );
          })}
          <Grid css={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Link href={`/posts/list/1`}>
              <Button color="secondary" css={{ marginTop: '$10', fontWeight: 'bold' }}>
                ใใฃใจ่ฆใ
              </Button>
            </Link>
          </Grid>
        </Grid.Container>
      </Container>
    </DefaultLayout>
  );
};

const StyledGrid = styled(Grid)`
  > .nextui-link {
    width: 100%;
  }
`;

export default Index;

export const getStaticProps = async () => {
  if (!cmsClient.client) {
    return {
      props: {
        recentPosts: [],
      },
    };
  }
  try {
    const result = await cmsClient.client.get<PaginationResult<Post>>({
      endpoint: 'posts',
      queries: { orders: '-publishedAt', limit: 100 },
    });

    return {
      props: {
        recentPosts: result.contents,
      },
    };
  } catch (error) {
    return {
      props: {
        recentPosts: [],
      },
    };
  }
};
