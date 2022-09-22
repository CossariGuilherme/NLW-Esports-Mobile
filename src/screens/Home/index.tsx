import { Image, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import { useEffect, useState } from 'react';

import { styles } from './styles';

export function Home(props: any) {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({ id, title, banner }: GameCardProps ){
    navigation.navigate('game', { id, title, banner });
  }

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image 
      source={logoImg}
      style={styles.logo}
      />


      <Image 
      source={{uri:`https://cdn.discordapp.com/avatars/${props.route.params.id}/${props.route.params.avatar}.png`}}
      style={styles.avatar}
      />

     <Text style={styles.userName}>
      {`Bem vindo(a) ${props.route.params.username}`}
     </Text>

      <Heading 
      title="Encontre seu duo!"
      subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
      data={games}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <GameCard
        data={item}
        onPress={() => handleOpenGame(item)}
        />
      )}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.contentList}
      />

    </SafeAreaView>
    </Background>
  );
}