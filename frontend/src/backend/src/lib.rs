use ic_cdk::export::candid::{CandidType, Deserialize};
use ic_cdk_macros::{query, update};
use std::cell::RefCell;

thread_local! {
    static BALANCE: RefCell<u64> = RefCell::new(1000);
    static TRANSACTIONS: RefCell<Vec<(String, u64)>> = RefCell::new(vec![]);
}

#[query]
fn get_balance() -> u64 {
    BALANCE.with(|b| *b.borrow())
}

#[update]
fn deposit() {
    BALANCE.with(|b| {
        *b.borrow_mut() += 500;
    });
    TRANSACTIONS.with(|txns| {
        txns.borrow_mut().push(("Deposit".to_string(), 500));
    });
}

#[update]
fn borrow(amount: u64) {
    BALANCE.with(|b| {
        *b.borrow_mut() -= amount;
    });
    TRANSACTIONS.with(|txns| {
        txns.borrow_mut().push(("Borrow".to_string(), amount));
    });
}

#[query]
fn get_transactions() -> Vec<(String, u64)> {
    TRANSACTIONS.with(|txns| txns.borrow().clone())
}

// candid export
ic_cdk::export::candid::export_service!();

