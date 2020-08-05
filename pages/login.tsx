import React from 'react';
import PageLayout from '../containers/layouts/PageLayout';
import AuthenticationContext from '../contexts/AuthenticationContext';
import { useRouter } from 'next/dist/client/router';
import { Card, Button } from 'bumbag';
import { doSignInWithGoogle } from '../lib/firebase';

const LoginPage = () => {
  const { isLoaded, user } = React.useContext(AuthenticationContext);
  const router = useRouter();
  if (isLoaded && user) {
    router.push('/');
  }

  return (
    <PageLayout
      title="Login"
      pageMeta={{
        description: 'Login in to ericjiang.dev',
        endpoint: '/login',
        imageUrl: '/images/eric-jiang-bitbybit.jpeg',
      }}
    >
      <Card>
        <Card.Title>Login in/Sign Up</Card.Title>
        <Card.Content marginTop="1rem">
          <Button
            iconBefore="brand-google"
            onClick={() => {
              doSignInWithGoogle().then(() => {
                router.push('/');
              });
            }}
          >
            Login in With Google
          </Button>
        </Card.Content>
      </Card>
    </PageLayout>
  );
};

export default LoginPage;
