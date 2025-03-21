import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // State for different sections of the app
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [calendarView, setCalendarView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Form states
  const [newOrderForm, setNewOrderForm] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    companyName: '',
    service: 'Product Testing',
    deliveryDays: 3,
    notes: ''
  });
  
  const [newUserForm, setNewUserForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: ''
  });
  
  // Sample data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234', company: 'Acme Corp', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678', company: 'XYZ Industries', address: '456 Oak Ave' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', phone: '555-9012', company: 'Green Environmental', address: '789 Pine Rd' }
  ]);
  
  const [orders, setOrders] = useState([
    { 
      id: 101, 
      customer: 'John Doe', 
      email: 'john@example.com', 
      phone: '555-1234',
      company: 'Acme Corp',
      service: 'Product Testing',
      status: 'Pending',
      orderDate: '2025-03-19',
      deliveryDate: '2025-03-22',
      daysLeft: 0,
      isUrgent: true
    },
    { 
      id: 102, 
      customer: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '555-5678',
      company: 'XYZ Industries',
      service: 'Quality Assurance',
      status: 'In Progress',
      orderDate: '2025-03-20',
      deliveryDate: '2025-03-24',
      daysLeft: 2,
      isUrgent: false
    },
    { 
      id: 103, 
      customer: 'Robert Johnson', 
      email: 'robert@example.com', 
      phone: '555-9012',
      company: 'Green Environmental',
      service: 'Certification',
      status: 'Completed',
      orderDate: '2025-03-15',
      deliveryDate: '2025-03-18',
      daysLeft: 0,
      isUrgent: false
    }
  ]);
  
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Order #101 is due today', type: 'urgent', time: '2 hours ago', read: false },
    { id: 2, message: 'Order #102 is due in 2 days', type: 'warning', time: '1 day ago', read: true },
    { id: 3, message: 'New order #103 was placed', type: 'info', time: '3 days ago', read: true }
  ]);
  
  // Services offered
  const services = [
    'Product Testing',
    'Quality Assurance',
    'Certification',
    'Compliance Check',
    'Performance Testing',
    'Safety Inspection'
  ];
  
  // Clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Functions for notifications
  const getUnreadCount = () => notifications.filter(n => !n.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({...n, read: true})));
  };
  
  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setShowStatusDropdown(null);
    }
  };
  
  // Functions for orders
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
    setShowStatusDropdown(null);
  };
  
  const openOrderModal = (order = null) => {
    if (order) {
      setSelectedOrder(order);
      setNewOrderForm({
        customerName: order.customer,
        customerEmail: order.email,
        customerPhone: order.phone,
        companyName: order.company,
        service: order.service,
        deliveryDays: 3,
        notes: ''
      });
    } else {
      setSelectedOrder(null);
      setNewOrderForm({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        companyName: '',
        service: 'Product Testing',
        deliveryDays: 3,
        notes: ''
      });
    }
    setShowOrderModal(true);
  };
  
  const closeOrderModal = () => {
    setShowOrderModal(false);
    setSelectedOrder(null);
  };
  
  const handleOrderFormChange = (e) => {
    const { name, value } = e.target;
    setNewOrderForm({
      ...newOrderForm,
      [name]: value
    });
  };
  
  const handleOrderSubmit = () => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + parseInt(newOrderForm.deliveryDays));
    
    const formattedToday = today.toISOString().split('T')[0];
    const formattedDelivery = deliveryDate.toISOString().split('T')[0];
    
    if (selectedOrder) {
      // Update existing order
      setOrders(orders.map(order => 
        order.id === selectedOrder.id 
          ? {
              ...order,
              customer: newOrderForm.customerName,
              email: newOrderForm.customerEmail,
              phone: newOrderForm.customerPhone,
              company: newOrderForm.companyName,
              service: newOrderForm.service,
              deliveryDate: formattedDelivery,
              daysLeft: parseInt(newOrderForm.deliveryDays)
            } 
          : order
      ));
    } else {
      // Add new order
      const newOrder = {
        id: Math.max(...orders.map(o => o.id), 0) + 1,
        customer: newOrderForm.customerName,
        email: newOrderForm.customerEmail,
        phone: newOrderForm.customerPhone,
        company: newOrderForm.companyName,
        service: newOrderForm.service,
        status: 'Pending',
        orderDate: formattedToday,
        deliveryDate: formattedDelivery,
        daysLeft: parseInt(newOrderForm.deliveryDays),
        isUrgent: parseInt(newOrderForm.deliveryDays) <= 1
      };
      
      setOrders([...orders, newOrder]);
      
      // Add notification for new order
      const newNotification = {
        id: Math.max(...notifications.map(n => n.id), 0) + 1,
        message: `New order #${newOrder.id} was placed`,
        type: 'info',
        time: 'Just now',
        read: false
      };
      
      setNotifications([newNotification, ...notifications]);
    }
    
    closeOrderModal();
  };
  
  // Functions for users
  const openAddUserModal = () => {
    setShowAddUserModal(true);
  };
  
  const closeAddUserModal = () => {
    setShowAddUserModal(false);
  };
  
  const handleUserFormChange = (e) => {
    const { name, value } = e.target;
    setNewUserForm({
      ...newUserForm,
      [name]: value
    });
  };
  
  const handleUserSubmit = () => {
    const newUser = {
      id: Math.max(...users.map(u => u.id), 0) + 1,
      name: newUserForm.name,
      email: newUserForm.email,
      phone: newUserForm.phone,
      company: newUserForm.company,
      address: newUserForm.address
    };
    
    setUsers([...users, newUser]);
    closeAddUserModal();
    
    // Reset form
    setNewUserForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      address: ''
    });
  };
  
  // Calendar functions
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border p-1 bg-gray-50"></div>);
    }
    
    // Map order dates to calendar
    const ordersByDate = {};
    orders.forEach(order => {
      const date = order.deliveryDate.split('-')[2];
      if (!ordersByDate[date]) {
        ordersByDate[date] = [];
      }
      ordersByDate[date].push(order);
    });
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = day.toString().padStart(2, '0');
      const ordersOnDay = ordersByDate[date] || [];
      
      days.push(
        <div key={day} className="h-24 border p-1 relative">
          <div className="font-bold">{day}</div>
          {ordersOnDay.map(order => (
            <div 
              key={order.id}
              className={`text-xs p-1 mt-1 rounded ${
                order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                order.isUrgent ? 'bg-red-100 text-red-800' : 
                'bg-blue-100 text-blue-800'
              }`}
            >
              #{order.id} - {order.service}
            </div>
          ))}
        </div>
      );
    }
    
    return (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <button 
            className="px-4 py-2 border rounded"
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setMonth(newDate.getMonth() - 1);
              setSelectedDate(newDate);
            }}
          >
            Previous
          </button>
          <h2 className="text-xl font-bold">{monthNames[month]} {year}</h2>
          <button 
            className="px-4 py-2 border rounded"
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setMonth(newDate.getMonth() + 1);
              setSelectedDate(newDate);
            }}
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          <div className="font-bold text-center p-2 bg-gray-100">Sun</div>
          <div className="font-bold text-center p-2 bg-gray-100">Mon</div>
          <div className="font-bold text-center p-2 bg-gray-100">Tue</div>
          <div className="font-bold text-center p-2 bg-gray-100">Wed</div>
          <div className="font-bold text-center p-2 bg-gray-100">Thu</div>
          <div className="font-bold text-center p-2 bg-gray-100">Fri</div>
          <div className="font-bold text-center p-2 bg-gray-100">Sat</div>
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4 flex items-center space-x-2">
          <div className="bg-white p-2 rounded">
            <svg className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="font-bold text-xl">Admin Dashboard</div>
        </div>
        
        <div className="px-4 py-2 text-sm text-blue-200">
          {currentTime.toLocaleTimeString()}
        </div>
        
        <nav className="mt-6">
          <a 
            className={`flex items-center py-3 px-4 cursor-pointer ${activeTab === 'dashboard' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Dashboard</span>
          </a>
          <a 
            className={`flex items-center py-3 px-4 cursor-pointer ${activeTab === 'orders' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveTab('orders')}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Orders</span>
          </a>
          <a 
            className={`flex items-center py-3 px-4 cursor-pointer ${activeTab === 'users' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveTab('users')}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Users</span>
          </a>
          <a 
            className={`flex items-center py-3 px-4 cursor-pointer ${activeTab === 'calendar' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveTab('calendar')}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Calendar</span>
          </a>
          <a 
            className={`flex items-center py-3 px-4 cursor-pointer ${activeTab === 'settings' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => setActiveTab('settings')}
          >
            <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="text-xl font-bold">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <button 
                  className="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  onClick={toggleNotifications}
                >
                  <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {getUnreadCount() > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                      {getUnreadCount()}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                    <div className="py-2">
                      <div className="flex justify-between px-4 py-2 text-sm font-medium text-gray-700 border-b">
                        <span>Notifications</span>
                        <button onClick={markAllAsRead} className="text-blue-500 hover:text-blue-700">
                          Mark all as read
                        </button>
                      </div>
                      {notifications.map(notification => (
                        <a 
                          key={notification.id} 
                          className={`block px-4 py-3 border-b hover:bg-gray-100 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                          onClick={() => markNotificationAsRead(notification.id)}
                        >
                          <div className={`text-sm font-medium ${
                            notification.type === 'urgent' ? 'text-red-600' :
                            notification.type === 'warning' ? 'text-yellow-600' :
                            'text-gray-900'
                          }`}>
                            {notification.message}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button className="flex items-center text-gray-700 focus:outline-none">
                  <div className="h-8 w-8 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <span className="ml-2">Admin User</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {activeTab === 'dashboard' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h2 className="text-sm font-medium text-gray-500">Total Orders</h2>
                      <p className="text-3xl font-bold text-gray-900">{orders.length}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h2 className="text-sm font-medium text-gray-500">Pending Orders</h2>
                      <p className="text-3xl font-bold text-gray-900">
                        {orders.filter(order => order.status === 'Pending').length}
                      </p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h2 className="text-sm font-medium text-gray-500">Completed Orders</h2>
                      <p className="text-3xl font-bold text-gray-900">
                        {orders.filter(order => order.status === 'Completed').length}
                      </p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h2 className="text-sm font-medium text-gray-500">Urgent Deliveries</h2>
                      <p className="text-3xl font-bold text-gray-900">
                        {orders.filter(order => order.isUrgent && order.status !== 'Completed').length}
                      </p>
                    </div>
                    <div className="bg-red-100 p-3 rounded-full">
                      <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-medium">Recent Orders</h2>
                    <button 
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      onClick={() => openOrderModal()}
                    >
                      New Order
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Service</th>
                            <th className="px-4 py-2">Delivery</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {orders.slice(0, 5).map(order => (
                            <tr key={order.id} className="hover:bg-gray-50">
                              <td className="px-4 py-2 whitespace-nowrap">
                                #{order.id}
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                {order.customer}
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                {order.service}
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                {order.deliveryDate}
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                  order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <button 
                                  className="text-blue-600 hover:text-blue-900 mr-3"
                                  onClick={() => openOrderModal(order)}
                                >
                                  Edit
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-medium">Upcoming Deliveries</h2>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {orders
                        .filter(order => order.status !== 'Completed')
                        .sort((a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate))
                        .slice(0, 4)
                        .map(order => (
                          <div key={order.id} className="flex items-center p-3 bg-gray-50 rounded">
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white ${
                              order.isUrgent ? 'bg-red-500' : 'bg-blue-500'
                            }`}>
                              {order.daysLeft === 0 ? 'Today' : `${order.daysLeft}d`}
                            </div>
                            <div className="ml-3 flex-1">
                              <h3 className="text-sm font-medium">{order.service} for {order.customer}</h3>
                              <p className="text-xs text-gray-500">Due on {order.deliveryDate}</p>
                            </div>
                            <div className="relative">
                              <button 
                                className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
                                onClick={() => setShowStatusDropdown(order.id === showStatusDropdown ? null : order.id)}
                              >
                                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                              </button>
                              {showStatusDropdown === order.id && (
                                <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-20">
                                  <div className="py-1">
                                    <a 
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                      onClick={() => handleStatusChange(order.id, 'Pending')}
                                    >
                                      Mark as Pending
                                    </a>
                                    <a 
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                      onClick={() => handleStatusChange(order.id, 'In Progress')}
                                    >
                                      Mark as In Progress
                                    </a>
                                    <a 
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                      onClick={() => handleStatusChange(order.id, 'Completed')}
                                    >
                                      Mark as Completed
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="text-lg font-medium">All Orders</h2>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => openOrderModal()}
                  >
                    New Order
                  </button>
                </div>
                <div className="p-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <th className="px-4 py-2">ID</th>
                          <th className="px-4 py-2">Customer</th>
                          <th className="px-4 py-2">Contact</th>
                          <th className="px-4 py-2">Company</th>
                          <th className="px-4 py-2">Service</th>
                          <th className="px-4 py-2">Order Date</th>
                          <th className="px-4 py-2">Delivery Date</th>
                          <th className="px-4 py-2">Status</th>
                          <th className="px-4 py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => (
                          <tr key={order.id} className={`hover:bg-gray-50 ${order.isUrgent && order.status !== 'Completed' ? 'bg-red-50' : ''}`}>
                            <td className="px-4 py-2 whitespace-nowrap">
                              #{order.id}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {order.customer}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              <div>{order.email}</div>
                              <div className="text-xs text-gray-500">{order.phone}</div>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {order.company}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {order.service}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {order.orderDate}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {order.deliveryDate}
                              {order.daysLeft === 0 && order.status !== 'Completed' && (
                                <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                  Due Today
                                </span>
                              )}
                              {order.daysLeft > 0 && order.status !== 'Completed' && (
                                <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                  {order.daysLeft} days left
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              <div className="relative">
                                <button 
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                    order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                    'bg-yellow-100 text-yellow-800'
                                  }`}
                                  onClick={() => setShowStatusDropdown(order.id === showStatusDropdown ? null : order.id)}
                                >
                                  {order.status} ▼
                                </button>
                                {showStatusDropdown === order.id && (
                                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-20">
                                    <div className="py-1">
                                      <a 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleStatusChange(order.id, 'Pending')}
                                      >
                                        Pending
                                      </a>
                                      <a 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleStatusChange(order.id, 'In Progress')}
                                      >
                                        In Progress
                                      </a>
                                      <a 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleStatusChange(order.id, 'Completed')}
                                      >
                                        Completed
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              <button 
                                className="text-blue-600 hover:text-blue-900 mr-3"
                                onClick={() => openOrderModal(order)}
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="text-lg font-medium">User Management</h2>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={openAddUserModal}
                  >
                    Add User
                  </button>
                </div>
                <div className="p-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <th className="px-4 py-2">ID</th>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Contact</th>
                          <th className="px-4 py-2">Company</th>
                          <th className="px-4 py-2">Address</th>
                          <th className="px-4 py-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.map(user => (
                          <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 whitespace-nowrap">
                              #{user.id}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {user.name}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              <div>{user.email}</div>
                              <div className="text-xs text-gray-500">{user.phone}</div>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {user.company}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              {user.address}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                              <button className="text-blue-600 hover:text-blue-900 mr-3">
                                Edit
                              </button>
                              <button 
                                className="text-blue-600 hover:text-blue-900"
                                onClick={() => {
                                  // Open order form with user details pre-filled
                                  setNewOrderForm({
                                    customerName: user.name,
                                    customerEmail: user.email,
                                    customerPhone: user.phone,
                                    companyName: user.company,
                                    service: 'Product Testing',
                                    deliveryDays: 3,
                                    notes: ''
                                  });
                                  setShowOrderModal(true);
                                }}
                              >
                                New Order
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div>
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="text-lg font-medium">Order Calendar</h2>
                  <div className="flex space-x-2">
                    <button 
                      className={`px-4 py-2 border rounded ${calendarView === 'month' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                      onClick={() => setCalendarView('month')}
                    >
                      Month
                    </button>
                    <button 
                      className={`px-4 py-2 border rounded ${calendarView === 'week' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                      onClick={() => setCalendarView('week')}
                    >
                      Week
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  {renderCalendar()}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <h2 className="text-lg font-medium">Settings</h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Profile Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                          <input type="text" className="w-full px-3 py-2 border rounded" value="Admin User" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input type="email" className="w-full px-3 py-2 border rounded" value="admin@example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input type="text" className="w-full px-3 py-2 border rounded" value="555-0123" />
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                          Save Changes
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input type="checkbox" id="emailNotif" className="h-4 w-4 text-blue-600" checked />
                          <label htmlFor="emailNotif" className="ml-2 block text-sm text-gray-700">
                            Email notifications for new orders
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="urgentNotif" className="h-4 w-4 text-blue-600" checked />
                          <label htmlFor="urgentNotif" className="ml-2 block text-sm text-gray-700">
                            Urgent notifications for deliveries due today
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="reminderNotif" className="h-4 w-4 text-blue-600" checked />
                          <label htmlFor="reminderNotif" className="ml-2 block text-sm text-gray-700">
                            Daily reminder notifications
                          </label>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Reminder Time</label>
                          <input type="time" className="w-full px-3 py-2 border rounded" value="09:00" />
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      
      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-medium">
                {selectedOrder ? `Edit Order #${selectedOrder.id}` : 'New Order'}
              </h2>
              <button 
                className="text-gray-400 hover:text-gray-500"
                onClick={closeOrderModal}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                  <input 
                    type="text" 
                    name="customerName"
                    className="w-full px-3 py-2 border rounded" 
                    value={newOrderForm.customerName}
                    onChange={handleOrderFormChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email</label>
                  <input 
                    type="email" 
                    name="customerEmail"
                    className="w-full px-3 py-2 border rounded" 
                    value={newOrderForm.customerEmail}
                    onChange={handleOrderFormChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Phone</label>
                  <input 
                    type="text" 
                    name="customerPhone"
                    className="w-full px-3 py-2 border rounded" 
                    value={newOrderForm.customerPhone}
                    onChange={handleOrderFormChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    className="w-full px-3 py-2 border rounded" 
                    value={newOrderForm.companyName}
                    onChange={handleOrderFormChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select 
                    name="service"
                    className="w-full px-3 py-2 border rounded" 
                    value={newOrderForm.service}
                    onChange={handleOrderFormChange}
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Days</label>
                  <input 
                    type="number" 
                    name="deliveryDays"
                    className="w-full px-3 py-2 border rounded" 
                    value={newOrderForm.deliveryDays}
                    onChange={handleOrderFormChange}
                    min="1"
                    max="30"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Estimated delivery: {new Date(new Date().getTime() + (parseInt(newOrderForm.deliveryDays) * 24 * 60 * 60 * 1000)).toLocaleDateString()}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea 
                    name="notes"
                    className="w-full px-3 py-2 border rounded" 
                    rows="3"
                    value={newOrderForm.notes}
                    onChange={handleOrderFormChange}
                  ></textarea>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  className="px-4 py-2 border rounded mr-2"
                  onClick={closeOrderModal}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={handleOrderSubmit}
                >
                  {selectedOrder ? 'Update Order' : 'Create Order'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-medium">Add New User</h2>
              <button 
                className="text-gray-400 hover:text-gray-500"
                onClick={closeAddUserModal}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full px-3 py-2 border rounded" 
                    value={newUserForm.name}
                    onChange={handleUserFormChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-3 py-2 border rounded" 
                    value={newUserForm.email}
                    onChange={handleUserFormChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="text" 
                    name="phone"
                    className="w-full px-3 py-2 border rounded" 
                    value={newUserForm.phone}
                    onChange={handleUserFormChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-3 py-2 border rounded" 
                    value={newUserForm.company}
                    onChange={handleUserFormChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" 
                    name="address"
                    className="w-full px-3 py-2 border rounded" 
                    value={newUserForm.address}
                    onChange={handleUserFormChange}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  className="px-4 py-2 border rounded mr-2"
                  onClick={closeAddUserModal}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={handleUserSubmit}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;