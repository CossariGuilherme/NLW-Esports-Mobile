import { Image, FlatList, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';

import { Heading } from '../../components/Heading';

import { useEffect, useState } from 'react';

import { styles } from './styles';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';

import * as AuthSession from 'expo-auth-session';

export function SignIn() {
  const [login, setLogin] = useState();

  const navigation = useNavigation();

  async function handleDiscordSignIn(){
    const response: any = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1022642110459019264&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40guilhermecossari%2Fmobile&response_type=token&scope=identify"
    })

    fetch('https://discord.com/api/users/@me', {
      headers: {
        'authorization': `Bearer ${response.params.access_token}`
      }
    })
    .then(response => response.json())
    .then(data => setLogin(data))
  }

  useEffect(() => {
    if(login){
      navigation.navigate('home', login);
    }
  }, [login]);
  
  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image 
      source={logoImg}
      style={styles.logo}
      />

      <Heading 
      title="Entrar"
      subtitle="Encontre seu duo e bora jogar."
      />
      <TouchableOpacity
      style={styles.button}
      onPress={handleDiscordSignIn}
      >
        <GameController
        color={THEME.COLORS.TEXT}
        size={20}
        />
        <Text style={styles.buttonTitle}>
          Entrar com Discord
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    </Background>
  );
}