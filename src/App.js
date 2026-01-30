import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Stores';
import ItemsMenu from './pages/ItemsMenu';
import Items from './pages/Items';
import Categories from './pages/Categories';
import Addons from './pages/Addons';
import AddonCategories from './pages/AddonCategories';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Promotions from './pages/Promotions';
import PromoSliders from './pages/PromoSliders';
import StoreCategorySlider from './pages/StoreCategorySlider';
import Coupons from './pages/Coupons';
import Pages from './pages/Pages';
import PushNotifications from './pages/PushNotifications';
import Transactions from './pages/Transactions';
import StorePayouts from './pages/StorePayouts';
import PayoutSchedule from './pages/PayoutSchedule';
import DeliveryCollections from './pages/DeliveryCollections';
import DeliveryLogs from './pages/DeliveryLogs';
import WalletTransactions from './pages/WalletTransactions';
import TransactionSchedules from './pages/TransactionSchedules';
import TransactionReports from './pages/TransactionReports';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/items-menu" element={<ItemsMenu />} />
          <Route path="/items" element={<Items />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/addons" element={<Addons />} />
          <Route path="/addon-categories" element={<AddonCategories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/promo-sliders" element={<PromoSliders />} />
          <Route path="/store-category-slider" element={<StoreCategorySlider />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/push-notifications" element={<PushNotifications />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/store-payouts" element={<StorePayouts />} />
          <Route path="/payout-schedule" element={<PayoutSchedule />} />
          <Route path="/delivery-collections" element={<DeliveryCollections />} />
          <Route path="/delivery-logs" element={<DeliveryLogs />} />
          <Route path="/wallet-transactions" element={<WalletTransactions />} />
          <Route path="/transaction-schedules" element={<TransactionSchedules />} />
          <Route path="/transaction-reports" element={<TransactionReports />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
