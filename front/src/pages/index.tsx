import TemplateHome from '../components/pc/templates/Home';
import { useFetch } from '../modules/fetch/home';
import { useEvent } from '../modules/event/home';

/**
 * ページ: トップページ
 */
function Index() {
  useEvent();
  const { accounts, myAccount, setMyAccount } = useFetch();

  return (
    <TemplateHome
      accounts={accounts}
      myAccount={myAccount}
      setMyAccount={setMyAccount}
    />
  );
}

export default Index;
