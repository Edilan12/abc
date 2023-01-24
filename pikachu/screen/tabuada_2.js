import { Text, View, StyleSheetm, ScrollView} from 'react-native';
import Styles from '../css/style'

export default function TabuadaDo2() {
  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.paragraph}>Tabuada do 2</Text>
      <Text style={Styles.paragraph}>2 x 1 = 2</Text>
      <Text style={Styles.paragraph}>2 x 2 = 4</Text>
      <Text style={Styles.paragraph}>2 x 3 = 6</Text>
      <Text style={Styles.paragraph}>2 x 4 = 8</Text>
      <Text style={Styles.paragraph}>2 x 5 = 10</Text>
      <Text style={Styles.paragraph}>2 x 6 = 12</Text>
      <Text style={Styles.paragraph}>2 x 7 = 14</Text>
      <Text style={Styles.paragraph}>2 x 8 = 16</Text>
      <Text style={Styles.paragraph}>2 x 9 = 18</Text>
      <Text style={Styles.paragraph}>2 x 10 = 20</Text>
    </ScrollView>
  );
}