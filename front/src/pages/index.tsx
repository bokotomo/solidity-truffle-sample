import TemplateHome from '../components/pc/templates/Home';
import { useFetchHome } from '../modules/fetch/home';
import { useEventHome } from '../modules/event/home';
import { useAdapterHome } from '../modules/adapter/home';

/**
 * ページ: トップページ
 */
function Index() {
  useEventHome();
  const { accounts } = useFetchHome();
  const { myAccount, contractLevelItem, setProvider } = useAdapterHome();

  return (
    <TemplateHome
      accounts={accounts}
      myAccount={myAccount}
      contractLevelItem={contractLevelItem}
      setProvider={setProvider}
    />
  );
}

export default Index;
