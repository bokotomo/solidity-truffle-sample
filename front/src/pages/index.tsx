import TemplateHome from '../components/pc/templates/Home';
import { useFetch } from '../modules/fetch/home';
import { useEvent } from '../modules/event/home';

/**
 * ページ: トップページ
 */
function Index() {
  useEvent();
  const { accounts, myAccount, contractLevelItem, setMyAccount, setProvider } =
    useFetch();

  return (
    <TemplateHome
      accounts={accounts}
      myAccount={myAccount}
      contractLevelItem={contractLevelItem}
      setMyAccount={setMyAccount}
      setProvider={setProvider}
    />
  );
}

export default Index;
